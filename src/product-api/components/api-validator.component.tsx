import { plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";
import { useState } from "react";

export const ApiValidator: React.FC<{
  cls: any;
  apiName: string;
  defaultValue?: string;
}> = ({ cls, apiName, defaultValue }) => {
  const [testingTargetRaw, setTestingTargetRaw] = useState(
    defaultValue ?? "{}"
  );
  const errors: string[] = [];

  const testingTargetTextareaOnchangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => setTestingTargetRaw(e.target.value);

  try {
    const jsonParsedTestingTarget = JSON.parse(testingTargetRaw);
    const instantiatedTestingTarget = plainToInstance(
      cls,
      jsonParsedTestingTarget
    );

    const validationResult = validateSync(instantiatedTestingTarget, {
      whitelist: true,
      forbidNonWhitelisted: true
    });

    validationResult.map((e) => {
      Object.entries(e.constraints ?? {}).map(([key, value]) =>
        errors.push(`오류 발견: ${value} ('${key}' error)`)
      );
      e.children?.map((eNested) =>
        eNested.children?.map((eNestedNested) =>
          Object.entries(eNestedNested.constraints ?? {}).map(([key, value]) =>
            errors.push(`오류 발견: ${value} ('${key}' error)`)
          )
        )
      );
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      errors.push("오류 발견: JSON syntax error");
    } else {
      errors.push(`오류 발견: Unknown error (${error})`);
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col gap-3 border-t pt-14 border-zinc-400">
      <h2 className=" text-4xl font-bold">
        '{apiName}'{" "}
        <span className=" text-zinc-400">
          기능에 대한 대한 데이터 스키마 테스트
        </span>
      </h2>
      <div className="flex gap-3">
        <div className="flex-1">
          <label
            htmlFor={apiName}
            className="text-sm mb-1 font-bold text-zinc-700"
          >
            테스트할 값 (JSON){" "}
            <span className=" text-xs font-medium text-zinc-500">
              모서리를 드래그하여 사이즈 조절 가능
            </span>
          </label>
          <textarea
            name=""
            id={apiName}
            onChange={testingTargetTextareaOnchangeHandler}
            value={testingTargetRaw}
            rows={2}
            className="border w-full p-3 rounded-xl border-zinc-400"
          ></textarea>
        </div>
        <div className="flex-1">
          <label className=" text-sm mb-1 font-bold text-zinc-700">
            테스트 결과
          </label>
          <div
            className={`p-3 pl-10 rounded-xl ${
              errors.length > 0 ? "bg-amber-400" : "bg-green-400"
            }`}
          >
            <ul className="list-disc">
              {errors.length > 0 ? (
                errors.map((e) => <li key={e}>{e}</li>)
              ) : (
                <li>테스트 통과</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

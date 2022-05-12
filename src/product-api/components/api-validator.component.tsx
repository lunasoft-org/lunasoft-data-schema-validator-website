import { plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";
import { useState } from "react";

export const ApiValidator: React.FC<{ cls: any }> = ({ cls }) => {
  const [testingTargetRaw, setTestingTargetRaw] = useState("{}");
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
    console.log(instantiatedTestingTarget);

    const validationResult = validateSync(instantiatedTestingTarget, {
      whitelist: true,
      forbidNonWhitelisted: true
    });
    console.log(JSON.stringify(validationResult));
    console.log(typeof validationResult);

    validationResult.map((e) => {
      Object.entries(e.constraints ?? {}).map(([key, value]) =>
        errors.push(`${key}: ${value}`)
      );
      e.children?.map((eNested) => {
        eNested.children?.map((eNestedNested) => {
          Object.entries(eNestedNested.constraints ?? {}).map(([key, value]) =>
            errors.push(`${key}: ${value}`)
          );
        });
      });
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      errors.push("JSON syntax error");
    } else {
      errors.push("Unknown error");
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          onChange={testingTargetTextareaOnchangeHandler}
          value={testingTargetRaw}
        ></textarea>
      </div>
      <div className=" p-3 pl-10 border">
        <ul className="list-disc">
          {errors.length > 0 ? (
            errors.map((e) => <li key={e}>{e}</li>)
          ) : (
            <li>발견된 에러가 없습니다</li>
          )}
        </ul>
      </div>
    </div>
  );
};

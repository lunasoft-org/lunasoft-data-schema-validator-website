import { Expose } from "class-transformer";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class Category {
  @IsNumber()
  @Expose({ name: "category_no" })
  categoryNo: number;

  @IsString()
  @Expose({ name: "category_name" })
  categoryName: string;

  @IsNumber()
  @Expose({ name: "category_depth" })
  categoryDepth: number;

  @IsString()
  @Expose({ name: "root_category_no" })
  rootCategoryNo: string;

  @IsString()
  @Expose({ name: "parent_category_no" })
  parentCategoryNo: string | null;

  @Expose({ name: "full_category_no" })
  fullCategoryNo: string;

  @IsBoolean()
  @Expose({ name: "use_yn" })
  useYn: boolean;
}

import { Expose, Type } from "class-transformer";
import {
  ArrayMinSize,
  IsBoolean,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested
} from "class-validator";

export class CategoryCounterContainer {
  @IsNumber()
  count: number;
}

export class Category {
  @IsNumber()
  @Expose({ name: "category_no" })
  category_no: number;

  @IsString()
  @Expose({ name: "category_name" })
  category_name: string;

  @IsNumber()
  @Expose({ name: "category_depth" })
  category_depth: number;

  @IsString()
  @Expose({ name: "root_category_no" })
  root_category_no: string;

  @IsString()
  @Expose({ name: "parent_category_no" })
  parent_category_no: string | null;

  @IsObject()
  @Expose({ name: "full_category_no" })
  full_category_no: Record<string, any>;

  @IsBoolean()
  @Expose({ name: "use_yn" })
  use_yn: boolean;
}

export class CategoryListContainer {
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => Category)
  category: Category[];
}

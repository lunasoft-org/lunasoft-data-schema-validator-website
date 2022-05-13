import { Type } from "class-transformer";
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
  category_no: number;

  @IsString()
  category_name: string;

  @IsNumber()
  category_depth: number;

  @IsString()
  root_category_no: string;

  @IsString()
  parent_category_no: string | null;

  @IsObject()
  full_category_no: Record<string, any>;

  @IsBoolean()
  use_yn: boolean;
}

export class CategoryListContainer {
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => Category)
  category: Category[];
}

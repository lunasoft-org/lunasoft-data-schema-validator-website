import { Type } from "class-transformer";
import {
  ArrayMinSize,
  IsBoolean,
  IsDateString,
  IsNumber,
  IsString,
  ValidateNested
} from "class-validator";

export class ProductCounterContainer {
  @IsNumber()
  count: number;
}

export class Product {
  @IsNumber()
  product_no: number;

  @IsString()
  product_name: string;

  @IsNumber()
  product_price: number;

  @IsNumber()
  product_discount_price: number;

  @IsBoolean()
  display_yn: boolean;

  @IsBoolean()
  soldout_yn: boolean;

  @IsBoolean()
  sell_yn: boolean;

  @IsString()
  product_thumbnail_image_url: string;

  @IsString()
  product_detail_url: string;

  @IsDateString()
  product_register_date: Date;

  @IsDateString()
  product_modify_date: Date | null;
}

export class ProductListContainer {
  @ArrayMinSize(1)
  @ValidateNested({ each: true, always: true })
  @Type(() => Product)
  product: Product[];
}

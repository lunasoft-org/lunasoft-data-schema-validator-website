import { Expose, Type } from "class-transformer";
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
  @Expose({ name: "product_no" })
  product_no: number;

  @IsString()
  @Expose({ name: "product_name" })
  product_ame: string;

  @IsNumber()
  @Expose({ name: "product_price" })
  product_price: number;

  @IsNumber()
  @Expose({ name: "product_discount_price" })
  product_discount_price: number;

  @IsBoolean()
  @Expose({ name: "display_yn" })
  display_yn: boolean;

  @IsBoolean()
  @Expose({ name: "soldout_yn" })
  soldout_yn: boolean;

  @IsBoolean()
  @Expose({ name: "sell_yn" })
  sell_yn: boolean;

  @IsString()
  @Expose({ name: "product_thumbnail_image_url" })
  product_thumbnail_image_url: string;

  @IsString()
  @Expose({ name: "product_detail_url" })
  product_detail_url: string;

  @IsDateString()
  @Expose({ name: "product_register_date" })
  product_register_date: Date;

  @IsDateString()
  @Expose({ name: "product_modify_date" })
  product_modify_date: Date | null;
}

export class ProductListContainer {
  @ArrayMinSize(1)
  @ValidateNested({ each: true, always: true })
  @Type(() => Product)
  product: Product[];
}

import { Expose, Type } from "class-transformer";
import {
  ArrayMinSize,
  arrayMinSize,
  IsArray,
  IsBoolean,
  IsDate,
  IsDateString,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsString,
  MinLength,
  ValidateNested
} from "class-validator";

export class ProductCounterContainer {
  @IsNumber()
  count: number;
}

export class Product {
  @IsNumber()
  @Expose({ name: "product_no" })
  productNo: number;

  @IsString()
  @Expose({ name: "product_name" })
  productName: string;

  @IsNumber()
  @Expose({ name: "product_price" })
  productPrice: number;

  @IsNumber()
  @Expose({ name: "product_discount_price" })
  productDiscountPrice: number;

  @IsBoolean()
  @Expose({ name: "display_yn" })
  displayYn: boolean;

  @IsBoolean()
  @Expose({ name: "soldout_yn" })
  soldoutYn: boolean;

  @IsBoolean()
  @Expose({ name: "sell_yn" })
  sellYn: boolean;

  @IsString()
  @Expose({ name: "product_thumbnail_image_url" })
  productThumbnailImageUrl: string;

  @IsString()
  @Expose({ name: "product_detail_url" })
  productDetailUrl: string;

  @IsDateString()
  @Expose({ name: "product_register_date" })
  productRegisterDate: Date;

  @IsDateString()
  @Expose({ name: "product_modify_date" })
  productModifyDate: Date | null;
}

export class ProductListContainer {
  @ArrayMinSize(1)
  @ValidateNested({ each: true, always: true })
  @Type(() => Product)
  product: Product[];
}

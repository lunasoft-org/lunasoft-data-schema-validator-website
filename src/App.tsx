import {
  CategoryCounterContainer,
  CategoryListContainer
} from "./product-api/classes/category.class";
import {
  ProductCounterContainer,
  ProductListContainer
} from "./product-api/classes/product.class";
import { ApiValidator } from "./product-api/components/api-validator.component";

function App() {
  return (
    <div className=" max-w-6xl mx-auto px-10 flex flex-col gap-14 my-20">
      <h1 className=" text-5xl font-bold break-normal">
        루나소프트 카카오 챗봇 연동용 <br />
        '상품 및 카테고리' 데이터 스키마 테스팅 툴
      </h1>
      <div>
        <div className="text-sm font-bold">설명</div>
        <p className=" text-lg">
          입력된 데이터가 루나소프트에서 제시하는 올바른 '상품 및 카테고리'
          데이터 스키마에 맞게 정의되어 있는지 테스트한다.
          <br />
          <br />각 항목에 대해 모범 예시값이 주어진다. 모든 항목이 "테스트
          통과"를 표시하고 있으면 테스트 통과이다.
          <br />각 항목에 대한 스키마 정의는{" "}
          <span className="font-bold">API 문서</span>를 확인하면 된다.
          <br />
          <br />
          '유저/주문' API에 대한 테스트는{" "}
          <a className=" underline text-blue-700" href="/">
            다른 페이지
          </a>
          에서 진행한다.
        </p>
      </div>
      <ApiValidator
        apiName="카테고리 개수 조회"
        cls={CategoryCounterContainer}
        defaultValue={'{"count": 3}'}
      />
      <ApiValidator
        apiName="카테고리 목록 조회"
        cls={CategoryListContainer}
        defaultValue={
          '{"category":[{"full_category_no":{"1":10000,"2":0,"3":0,"4":0},"category_name":"LUSH","root_category_no":"10000","use_yn":true,"category_no":10000,"parent_category_no":"0","category_depth":1},{"full_category_no":{"1":10000,"2":10001,"3":0,"4":0},"category_name":"제품","root_category_no":"10000","use_yn":true,"category_no":10001,"parent_category_no":"10000","category_depth":2}]}'
        }
      />
      <ApiValidator
        apiName="상품 개수 조회"
        cls={ProductCounterContainer}
        defaultValue={'{"count": 3}'}
      />
      <ApiValidator
        apiName="상품 목록 조회"
        cls={ProductListContainer}
        defaultValue={
          '{"product":[{"product_thumbnail_image_url":"https://renewtest1.lush.co.kr/upload/heroImage/20211007153449L.jpg","product_discount_price":0,"soldout_yn":false,"product_detail_url":"https://renewtest1.lush.co.kr/products/view/39","product_register_date":"2022-03-30 14:17:31","sell_yn":true,"product_modify_date":"2011-01-20 15:17:23","product_price":14000,"product_no":39,"product_name":"빅 블루","display_yn":true}]}'
        }
      />
      <div className="italic text-center">루나소프트</div>
    </div>
  );
}

export default App;

import {
  CategoryCounterContainer,
  CategoryListContainer
} from "./product-api/classes/category.class";
import {
  ProductCounterContainer,
  ProductListContainer
} from "./product-api/classes/product.class";
import { ApiValidatorGroupTitle } from "./common/components/api-validator-group-title.component";
import { ApiValidator } from "./common/components/api-validator.component";

function App() {
  return (
    <div className=" max-w-6xl mx-auto px-10 flex flex-col gap-14 my-20 ">
      <h1 className=" text-5xl font-bold break-normal">
        루나소프트 외부 시스템 연동용 데이터 스키마 테스팅 툴
      </h1>
      <div>
        <div className="text-sm font-bold">설명</div>
        <p className=" text-lg">
          입력된 데이터가 루나소프트에서 제시하는 올바른 데이터 스키마에 맞게
          정의되어 있는지 테스트한다.
          <br />
          <br />각 항목에 대해 <span className="font-bold">모범 예시값</span>이
          주어진다. 모든 항목이{" "}
          <span className=" bg-green-400 px-2 py-1 rounded-md ">초록색</span>
          의 "테스트 통과"를 표시하고 있으면 테스트 통과이다.
          <br />각 항목에 대한 스키마 정의는{" "}
          <span className="font-bold">API 문서</span>를 확인하면 된다.
        </p>
      </div>
      <ApiValidatorGroupTitle title="카카오 챗봇 시스템 연동" />
      <ApiValidator
        apiName="카테고리 개수 조회"
        cls={CategoryCounterContainer}
        defaultValueJSON={{ count: 3 }}
      />
      <ApiValidator
        apiName="카테고리 목록 조회"
        cls={CategoryListContainer}
        defaultValueJSON={{
          category: [
            {
              full_category_no: { "1": 10000, "2": 0, "3": 0, "4": 0 },
              category_name: "cateogory 1",
              root_category_no: "10000",
              use_yn: true,
              category_no: 10000,
              parent_category_no: "0",
              category_depth: 1
            },
            {
              full_category_no: { "1": 10000, "2": 10001, "3": 0, "4": 0 },
              category_name: "category a",
              root_category_no: "10000",
              use_yn: true,
              category_no: 10001,
              parent_category_no: "10000",
              category_depth: 2
            }
          ]
        }}
      />
      <ApiValidator
        apiName="상품 개수 조회"
        cls={ProductCounterContainer}
        defaultValueJSON={{ count: 3 }}
      />
      <ApiValidator
        apiName="상품 목록 조회"
        cls={ProductListContainer}
        defaultValueJSON={{
          product: [
            {
              product_thumbnail_image_url:
                "https://lunasoft.co.kr/images/common/luna-logo-white.png",
              product_discount_price: 0,
              soldout_yn: false,
              product_detail_url:
                "https://n.news.naver.com/mnews/article/018/0005039636?sid=101",
              product_register_date: "2022-03-30 14:17:31",
              sell_yn: true,
              product_modify_date: "2011-01-20 15:17:23",
              product_price: 14000,
              product_no: 39,
              product_name: "상품 1 (할인 없음)",
              display_yn: true
            },

            {
              product_thumbnail_image_url:
                "https://lunasoft.co.kr/images/common/luna-logo-white.png",
              product_discount_price: 13000,
              soldout_yn: false,
              product_detail_url:
                "https://n.news.naver.com/mnews/article/018/0005039636?sid=101",
              product_register_date: "2022-03-30 14:17:31",
              sell_yn: true,
              product_modify_date: "2011-01-20 15:17:23",
              product_price: 14000,
              product_no: 40,
              product_name: "상품 2 (할인 혜택 1,000원 적용가격)",
              display_yn: true
            }
          ]
        }}
      />
      <div className="italic text-center">루나소프트</div>
    </div>
  );
}

export default App;

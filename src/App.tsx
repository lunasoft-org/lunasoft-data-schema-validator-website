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
    <div className="App">
      <ApiValidator cls={CategoryCounterContainer} />
      <ApiValidator cls={CategoryListContainer} />
      <ApiValidator cls={ProductCounterContainer} />
      <ApiValidator cls={ProductListContainer} />
    </div>
  );
}

export default App;

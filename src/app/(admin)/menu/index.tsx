import { FlatList } from 'react-native';

import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

export default function MenuScreen() {
  return (
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductListItem product={item} /> }
          numColumns={2}
          contentContainerStyle={{gap: 10, padding: 10}}
          columnWrapperStyle={{gap: 10}}
        />
  );
}

//The FlatList is used for displaying a scrollable list of products
// the numColumns will arrange the products in grids
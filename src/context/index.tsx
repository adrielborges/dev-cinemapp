import React from 'react';

import {FavoriteListProvider} from './FavoriteMovies';

const AppContext: React.FC = ({children}: any) => (
  <FavoriteListProvider>{children}</FavoriteListProvider>
);

export default AppContext;

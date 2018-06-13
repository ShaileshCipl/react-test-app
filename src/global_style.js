import { injectGlobal } from 'styled-components';
import images from './images';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height:auto;
    width: 100%;
  }
  *{
    box-sizing:border-box; 
  }
  img{
      max-width: 100%;
  }
  .Banner{
        background:url(${images.background})no-repeat bottom center/cover;
  }
  .BestDeals{
        background:url(${images.hotelHome})no-repeat top center/cover;
  }
  .RecommendedHotel{
        background:url(${images.hotelHome2})no-repeat top center/cover;
  }
  .RecommendedHotel2{
        background:url(${images.hotelHome3})no-repeat top center/cover;
  }
  .modal{
       background-image:url(${images.modalBg});
         
  }`;

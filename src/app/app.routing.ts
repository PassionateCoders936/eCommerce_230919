import { Routes,RouterModule} from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'product-details', component: ProductDetailsComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'wishlist', component: WishlistComponent },
    { path: 'cart', component: CartComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog-details', component: BlogDetailsComponent },
    { path: 'about_us', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent },
  
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
  ];

  export const routing = RouterModule.forRoot(appRoutes);
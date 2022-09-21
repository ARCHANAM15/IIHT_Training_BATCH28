import { AuthorComponent } from "../author/author.component"
import { HomeComponent } from "../home/home.component"
import { ReaderComponent } from "../reader/reader.component"

export const Mainroutes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: AuthorComponent },
    { path: 'author', loadChildren: () => import('../author/author.module').then(m => m.authorModule) },
    { path: 'create-book', loadChildren: () => import('../create-book/create-book.module').then(m => m.createbookModule) },
    { path: 'reader', component:ReaderComponent}
    
]
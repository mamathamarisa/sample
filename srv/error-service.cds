using {demo as my} from '../db/schema';

service ErrorService{
    entity Products as projection on my.Products;
    
}
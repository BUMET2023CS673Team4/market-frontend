import Product from "../Product"

export default function Textbooks(){
    const contentTextbooks = [
        {img:"/textbooks_books.webp", url:"/product/electronics/productlist", name:"Books"}, 
        {img:"/textbooks_notebooks.jpeg", url:"/product/electronics/productlist", name:"Notebooks"},
        {img:"/textbooks_textbooks.jpg", url:"/product/electronics/productlist", name:"College Textbooks"}
    ]
    
    return (
            <Product content={contentTextbooks} />
    )
}
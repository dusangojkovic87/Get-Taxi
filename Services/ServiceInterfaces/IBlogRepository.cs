using Get_Taxi.Entities;


namespace Get_Taxi.Services.ServiceInterfaces
{
    public interface IBlogRepository
    {
        void addBlogCategory(BlogCategory model);
        void addBlog(Blog model);
        
    }
}
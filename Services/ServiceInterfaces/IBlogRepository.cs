
using System.Collections.Generic;
using Get_Taxi.Entities;

namespace Get_Taxi.Services.ServiceInterfaces
{
    public interface IBlogRepository:IRepository<Blog>
    {
        void addBlog(Blog model);
        IEnumerable<Blog> getBlogs();
      
    }
}
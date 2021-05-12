using System.Collections.Generic;
using System.Linq;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;

namespace Get_Taxi.Services.Repositories
{
    public class BlogRepository : Repository<Blog>, IBlogRepository
    {
        private  AplicationDbContext _context;
        public BlogRepository(AplicationDbContext context) : base(context)
        {
            _context = context;

        }
        public void addBlog(Blog model)
        {
            _context.Blog.Add(model);

        }

        public IEnumerable<Blog> getBlogs(){
         return  _context.Blog.ToList();
        }

        public Blog getBlog(int id)
        {
           return _context.Blog.FirstOrDefault(x => x.Id == id);
        }
    }
}
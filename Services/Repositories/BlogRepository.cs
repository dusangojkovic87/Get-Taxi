using System.Threading.Tasks;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;

namespace Get_Taxi.Services.Repositories
{
    public class BlogCategoryRepository : Repository<BlogCategory>, IBlogRepository
    {
        private  AplicationDbContext _context;
        public BlogCategoryRepository(AplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public void addBlog(Blog model)
        {
            _context.Blog.Add(model);
       
        }

        public void addBlogCategory(BlogCategory model)
        {
            _context.BlogCategory.Add(model);
        }
    }
}
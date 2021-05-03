using Get_Taxi.Services.ServiceInterfaces;
using Microsoft.AspNetCore.Mvc;

namespace Get_Taxi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Blogs : BaseController
    {
        private readonly IUnitOfWork _repository;
        public Blogs(IUnitOfWork repository)
        {
            _repository = repository;

        }


        [HttpGet]
        [Route("get-blogs")]
        public IActionResult GetBlogs()
        {
            var blogs = _repository.BlogPost.getBlogs();
            if (blogs == null)
            {
                return NotFound();
            }

            return Ok(blogs);

        }

    }
}
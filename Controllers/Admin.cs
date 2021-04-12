using AutoMapper;
using Get_Taxi.Entities;
using Get_Taxi.Helpers;
using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace Get_Taxi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Admin : Controller
    {
        private IUnitOfWork _repository;
        private readonly IMapper _mapper;
        private readonly IWebHostEnvironment _env;
        
        public Admin(IUnitOfWork repository, IMapper mapper, IWebHostEnvironment env)
        {
            
            _env = env;
            _mapper = mapper;
            _repository = repository;

        }

        [HttpGet]
        [Route("get-taxi-orders")]
        public IActionResult getTaxiOrders()
        {
            var taxiOrders = _repository.TaxiOrders.getTaxiOrders();
            return Ok(taxiOrders);
        }

        [HttpPost]
        [Route("add-blog")]
        public IActionResult addBlog([FromForm] BlogAddModel model)
        {
            if (ModelState.IsValid)
            {
                var uploader = new Uploader();
                var pathToSave ="/wwwroot/blog/images/";
                var imageName = uploader.UploadImage(model.BlogImage,_env.ContentRootPath,pathToSave);
                var blog = new Blog{
                    BlogName = model.BlogName,
                    BlogText = model.BlogText,
                    BlogImage = imageName
                };
                _repository.BlogPost.addBlog(blog);
                return Ok();
            }

            return BadRequest();


        }
    }
}
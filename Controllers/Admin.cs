using AutoMapper;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;
using Microsoft.AspNetCore.Mvc;

namespace Get_Taxi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Admin : Controller
    {
        private IUnitOfWork _repository;
        private readonly IMapper _mapper;
        public Admin(IUnitOfWork repository, IMapper mapper)
        {
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
        public IActionResult addBlog(BlogAddModel model)
        {
            if (ModelState.IsValid)
            {
               var blog =  _mapper.Map<Blog>(model);

                _repository.BlogPost.addBlog(blog);
            }

            return BadRequest();


        }
    }
}
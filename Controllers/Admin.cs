using Get_Taxi.Services.ServiceInterfaces;
using Microsoft.AspNetCore.Mvc;

namespace Get_Taxi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Admin : Controller
    {
        private IUnitOfWork _repository;
        public Admin(IUnitOfWork repository)
        {
            _repository = repository;

        }

        [HttpGet]
        [Route("get-taxi-orders")]
        public IActionResult getTaxiOrders()
        {
            var taxiOrders = _repository.TaxiOrders.getTaxiOrders();
            return Ok(taxiOrders);
        }


        

    }
}
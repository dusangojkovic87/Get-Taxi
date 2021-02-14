using System.Threading.Tasks;
using AutoMapper;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Get_Taxi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class Booking : BaseController
    {
        private readonly IUnitOfWork _repository;
        private readonly IMapper _mapper;
        public Booking(IUnitOfWork repository, IMapper mapper)
        {
            _mapper = mapper;
            _repository = repository;

        }

        [HttpPost]
        [Route("taxi")]
        public IActionResult Taxi(TaxiOrderAddModel model)
        {

            if (ModelState.IsValid)
            {
                var userId = GetUserId();
                
                model.UserId = userId;
                var taxiOrder = _mapper.Map<TaxiOrders>(model);
                _repository.Booking.Add(taxiOrder);
                if (_repository.Save() > 0)
                {
                    return Ok(new { message = "Booked successfully!" });
                }
            }

            return BadRequest(ModelState);
        }

    }
}
using System.Threading.Tasks;
using Get_Taxi.Models;
using Get_Taxi.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Get_Taxi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class Booking : BaseController
    {
        private IBookingRepository _booking;
        public Booking(IBookingRepository booking)
        {
            _booking = booking;
        }

    [HttpPost]
    [Route("taxi")]
    public async Task<IActionResult> Taxi(TaxiOrderAddModel model){
    
    if(ModelState.IsValid){
        var userId = GetUserId();
        var saved = await _booking.bookTaxi(model,userId);
        if(saved){
          return Ok(new {message = "order succesfull!"});
         }
      }  
    return BadRequest(ModelState);
    }
  }
}
using System;
using System.Threading.Tasks;
using Get_Taxi.Models;
using Get_Taxi.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Get_Taxi.Controllers
{


    [ApiController]
    [Route("[controller]")]
    public class Admin : ControllerBase
    {
        private IAdminRepository _admin;
        private readonly ILogger<Admin> _logger;

        public Admin(IAdminRepository admin, ILogger<Admin> logger)
        {
            _logger = logger;
            _admin = admin;

        }


        [HttpPost]
        [Route("add-car-category")]
        public async Task<IActionResult> carCategory(CarCategoryAddModel model)
        {
            if (ModelState.IsValid)
            {
              
                    var saved = await _admin.addCarCategory(model);
                    if (saved)
                    {
                        return Ok(new { message = "Car category added!" });
                    } 
            }

            return BadRequest(ModelState);
        }
    }
}
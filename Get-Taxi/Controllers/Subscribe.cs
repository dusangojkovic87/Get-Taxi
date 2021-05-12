using System.Threading.Tasks;
using AutoMapper;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Get_Taxi.Services.ServiceInterfaces;
using Microsoft.AspNetCore.Mvc;

namespace Get_Taxi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Subscribe : BaseController
    {
        private readonly IUnitOfWork _repository;
        private readonly IMapper _mapper;
        public Subscribe(IUnitOfWork repository, IMapper mapper)
        {
            _mapper = mapper;
            _repository = repository;
        }


        [HttpPost]
        [Route("email")]
        public async Task<IActionResult> email(SubsribeUserAddModel model)
        {


            if (ModelState.IsValid)
            {
                var email = _mapper.Map<SubscribedUsers>(model);
                var exist = await _repository.SubsribeEmail.isSubsribed(email);
                if (exist)
                {
                    return BadRequest(new { message = "already subscribed!" });
                }
                _repository.SubsribeEmail.subscribeUser(email);
                return Ok(new {message ="subscribed!"});

            }

            return BadRequest(ModelState);

        }

    }
}
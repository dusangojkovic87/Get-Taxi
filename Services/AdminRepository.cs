using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Get_Taxi.Entities;
using Get_Taxi.Models;
using Microsoft.EntityFrameworkCore;

namespace Get_Taxi.Services
{
    public interface IAdminRepository
    {
        Task<bool> addCarCategory(CarCategoryAddModel model);
        Task<bool> addCar(CarAddModel model,int categoryId);

    }



    public class AdminRepository : IAdminRepository
    {

        private AplicationDbContext _context;
        private readonly IMapper _mapper;

        public AdminRepository(AplicationDbContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }



        public async Task<bool> addCarCategory(CarCategoryAddModel model)
        {
            var carCategory = _mapper.Map<CarCategory>(model);
            await _context.CarCategory.AddAsync(carCategory);
            var isSaved = await _context.SaveChangesAsync() > 0;
            return isSaved;

        }

        public async Task<bool> addCar(CarAddModel model,int categoryId){

        model.CarCategoryId = categoryId;
       var newCar =  _mapper.Map<Cars>(model);
       await _context.Cars.AddAsync(newCar);
       var isSaved = await _context.SaveChangesAsync() > 0;
       return isSaved;

    }
  }

}
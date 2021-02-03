using System.Threading.Tasks;
using AutoMapper;
using Get_Taxi.Entities;
using Get_Taxi.Models;

namespace Get_Taxi.Services
{
    public interface IAdminRepository
    {
        Task<bool> addCarCategory(CarCategoryAddModel model);

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
            var saved = await _context.SaveChangesAsync() > 0;
            return saved;

        }
    }
}
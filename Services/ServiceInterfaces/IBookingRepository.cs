using System.Threading.Tasks;
using Get_Taxi.Entities;

namespace Get_Taxi.Services.ServiceInterfaces
{
    public interface IBookingRepository:IRepository<TaxiOrders>
    {
        void bookTaxi(TaxiOrders model);
        
    }
}
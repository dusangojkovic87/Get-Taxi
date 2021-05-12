using System.Collections.Generic;
using Get_Taxi.Entities;


namespace Get_Taxi.Services.ServiceInterfaces
{
    public interface ITaxiOrders
    {
        IEnumerable<TaxiOrders> getTaxiOrders();
         
    }
}
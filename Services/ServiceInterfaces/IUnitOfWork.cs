
using System;

namespace Get_Taxi.Services.ServiceInterfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IAuthRepository AuthUser {get;set;}
        IBookingRepository Booking {get;set;}
        IMessageRepository Messages {get;set;}
        ISubscribeRepository SubsribeEmail {get;set;}
        int Save();
    }
}

using System;

namespace Get_Taxi.Services.ServiceInterfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IAuthRepository AuthUser {get;}
        int Save();
    }
}
using AutoMapper;
using Get_Taxi.Entities;
using Get_Taxi.Models;

namespace Get_Taxi.Helpers
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<User,RegisterModel>().ReverseMap();
            CreateMap<User,LoginModel>().ReverseMap();
            CreateMap<TaxiOrders,TaxiOrderAddModel>().ReverseMap();
            CreateMap<Messages,MessageAddModel>().ReverseMap();
            CreateMap<SubscribedUsers,SubsribeUserAddModel>().ReverseMap();
            CreateMap<MessageGetModel,Messages>().ReverseMap();
            CreateMap<BlogAddModel,Blog>().ReverseMap();
            
                                
        }
        
    }
}
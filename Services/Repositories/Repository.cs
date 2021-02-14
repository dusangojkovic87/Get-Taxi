using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Get_Taxi.Services.ServiceInterfaces;
using Microsoft.EntityFrameworkCore;

namespace Get_Taxi.Services.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly DbContext context;
        public Repository(DbContext context)
        {
            this.context = context;

        }



        public void Add(T entity)
        {
           context.Set<T>().Add(entity);
        }

        public void AddRange(IEnumerable<T> entities)
        {
            context.Set<T>().AddRange(entities);  
        }

    
        public IEnumerable<T> Find(Expression<System.Func<T, bool>> predicate)
        {
            return context.Set<T>().Where(predicate);
        }

        public T Get(int id)
        {
            return context.Set<T>().Find(id);
        }

        public IEnumerable<T> GetAll()
        {
            return context.Set<T>().ToList();
        }

        public void Remove(T entity)
        {
           context.Set<T>().Remove(entity);
        }

        public void RemoveRange(IEnumerable<T> entities)
        {
            context.Set<T>().RemoveRange(entities);
        }
    }
}
﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using TesteUpload.Model;

namespace TesteUpload.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RifasController : ControllerBase
    {
        private readonly UP7WebApiContext _context;
        private IHostingEnvironment _env;

        public RifasController(UP7WebApiContext context, IHostingEnvironment env)
        {
            _context = context;
            _env = env;
        }
        // GET: api/Rifas
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Rifas/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [Produces("application/json")]
        [HttpPost, DisableRequestSizeLimit]
        [EnableCors("MyPolicy")]
        [Route("cadastro")]
        public async Task<IActionResult> UploadFile()
        {
            ReturnModel result = new ReturnModel();
            try
            {
                var rifa = JsonConvert.DeserializeObject<RifaModel>(Request.Form["rifa"]);
                var webRoot = _env.WebRootPath;
                var filePath = System.IO.Path.Combine(webRoot, "conteudo\\");


                foreach (var arquivo in Request.Form.Files)
                {
                    if (arquivo.Length > 0)
                    {
                       rifa.Imagem = ($"conteudo/{arquivo.FileName}");
                        var imagem = $"{ filePath}{ arquivo.FileName}";
                        using (var stream = new FileStream(imagem, FileMode.Create))
                        {
                            await arquivo.CopyToAsync(stream);
                        }
                    }
                }
                _context.rifas.Add(rifa);
                _context.SaveChanges();
                result.Message = "Dados salvos com sucesso!";

            }
            catch (Exception ex)
            {
                var e = ex;
                result.Message = "Erro, verifique se os dados estão corretos!";
                return Ok(result);

            }

            return Ok(result);
        }

        // PUT: api/Rifas/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

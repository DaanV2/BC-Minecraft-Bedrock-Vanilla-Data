﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace Scraper.RP {
    public partial class Texture : IIdentifier {
        /// <summary>
        /// 
        /// </summary>
        [JsonPropertyName("id")]
        public String ID { get; set; }
    }
}

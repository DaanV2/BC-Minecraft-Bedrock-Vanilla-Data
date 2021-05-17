﻿using System;
using System.Text.Json.Serialization;
using Scraper.BP.Converters;

namespace Scraper.BP {
    ///DOLATER <summary>add description for class: Trading</summary>
    [JsonConverter(typeof(TradingConverter))]
    public partial class Trading {
        /// <summary>Creates a new instance of <see cref="Trading"/></summary>
        public Trading() : this(String.Empty) { }

        /// <summary>Creates a new instance of <see cref="Trading"/></summary>
        /// <param name="ID"></param>
        public Trading(String ID) {
            this.ID = ID;
        }
    }
}

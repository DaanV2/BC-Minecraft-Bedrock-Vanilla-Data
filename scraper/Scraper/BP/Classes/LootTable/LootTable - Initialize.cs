﻿using System;
using System.Text.Json.Serialization;
using Scraper.BP.Converters;

namespace Scraper.BP {
    ///DOLATER <summary>add description for class: LootTable</summary>
    [JsonConverter(typeof(LootTableConverter))]
    public partial class LootTable {
        /// <summary>Creates a new instance of <see cref="LootTable"/></summary>
        public LootTable() : this(String.Empty) { }

        /// <summary>Creates a new instance of <see cref="LootTable"/></summary>
        /// <param name="ID"></param>
        public LootTable(String ID) {
            this.ID = ID;
        }
    }
}

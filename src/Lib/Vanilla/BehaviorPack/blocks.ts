import { Block } from '../../Types/BehaviorPack/Block';


export const Blocks: Block[] = 
[
  {
    "id": "minecraft:acacia_button",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "button_pressed_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:acacia_door",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "door_hinge_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upper_block_bit"
      }
    ]
  },
  {
    "id": "minecraft:acacia_fence_gate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "in_wall_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      }
    ]
  },
  {
    "id": "minecraft:acacia_pressure_plate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:acacia_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:acacia_standing_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "ground_sign_direction"
      }
    ]
  },
  {
    "id": "minecraft:acacia_trapdoor",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      }
    ]
  },
  {
    "id": "minecraft:acacia_wall_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:activator_rail",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "rail_data_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "rail_direction"
      }
    ]
  },
  {
    "id": "minecraft:air",
    "states": []
  },
  {
    "id": "minecraft:allow",
    "states": []
  },
  {
    "id": "minecraft:amethyst_block",
    "states": []
  },
  {
    "id": "minecraft:amethyst_cluster",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:ancient_debris",
    "states": []
  },
  {
    "id": "minecraft:andesite_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:anvil",
    "states": [
      {
        "values": [
          "undamaged",
          "slightly_damaged",
          "very_damaged",
          "broken"
        ],
        "name": "damage"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      }
    ]
  },
  {
    "id": "minecraft:azalea",
    "states": []
  },
  {
    "id": "minecraft:azalea_leaves",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "persistent_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "update_bit"
      }
    ]
  },
  {
    "id": "minecraft:azalea_leaves_flowered",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "persistent_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "update_bit"
      }
    ]
  },
  {
    "id": "minecraft:bamboo",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "age_bit"
      },
      {
        "values": [
          "no_leaves",
          "small_leaves",
          "large_leaves"
        ],
        "name": "bamboo_leaf_size"
      },
      {
        "values": [
          "thin",
          "thick"
        ],
        "name": "bamboo_stalk_thickness"
      }
    ]
  },
  {
    "id": "minecraft:bamboo_sapling",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "age_bit"
      },
      {
        "values": [
          "oak",
          "spruce",
          "birch",
          "jungle",
          "acacia",
          "dark_oak"
        ],
        "name": "sapling_type"
      }
    ]
  },
  {
    "id": "minecraft:barrel",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      }
    ]
  },
  {
    "id": "minecraft:barrier",
    "states": []
  },
  {
    "id": "minecraft:basalt",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:beacon",
    "states": []
  },
  {
    "id": "minecraft:bed",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "head_piece_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "occupied_bit"
      }
    ]
  },
  {
    "id": "minecraft:bedrock",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "infiniburn_bit"
      }
    ]
  },
  {
    "id": "minecraft:bee_nest",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "honey_level"
      }
    ]
  },
  {
    "id": "minecraft:beehive",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "honey_level"
      }
    ]
  },
  {
    "id": "minecraft:beetroot",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "name": "growth"
      }
    ]
  },
  {
    "id": "minecraft:bell",
    "states": [
      {
        "values": [
          "standing",
          "hanging",
          "side",
          "multiple"
        ],
        "name": "attachment"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "toggle_bit"
      }
    ]
  },
  {
    "id": "minecraft:big_dripleaf",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "big_dripleaf_head"
      },
      {
        "values": [
          "none",
          "unstable",
          "partial_tilt",
          "full_tilt"
        ],
        "name": "big_dripleaf_tilt"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      }
    ]
  },
  {
    "id": "minecraft:birch_button",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "button_pressed_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:birch_door",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "door_hinge_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upper_block_bit"
      }
    ]
  },
  {
    "id": "minecraft:birch_fence_gate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "in_wall_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      }
    ]
  },
  {
    "id": "minecraft:birch_pressure_plate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:birch_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:birch_standing_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "ground_sign_direction"
      }
    ]
  },
  {
    "id": "minecraft:birch_trapdoor",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      }
    ]
  },
  {
    "id": "minecraft:birch_wall_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:black_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:blackstone",
    "states": []
  },
  {
    "id": "minecraft:blackstone_double_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:blackstone_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:blackstone_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:blackstone_wall",
    "states": [
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_east"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_north"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_south"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_west"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "wall_post_bit"
      }
    ]
  },
  {
    "id": "minecraft:blast_furnace",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:blue_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:blue_ice",
    "states": []
  },
  {
    "id": "minecraft:bone_block",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "deprecated"
      },
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:bookshelf",
    "states": []
  },
  {
    "id": "minecraft:border_block",
    "states": [
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_east"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_north"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_south"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_west"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "wall_post_bit"
      }
    ]
  },
  {
    "id": "minecraft:brewing_stand",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "brewing_stand_slot_a_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "brewing_stand_slot_b_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "brewing_stand_slot_c_bit"
      }
    ]
  },
  {
    "id": "minecraft:brick_block",
    "states": []
  },
  {
    "id": "minecraft:brick_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:brown_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:brown_mushroom",
    "states": []
  },
  {
    "id": "minecraft:brown_mushroom_block",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "huge_mushroom_bits"
      }
    ]
  },
  {
    "id": "minecraft:bubble_column",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "drag_down"
      }
    ]
  },
  {
    "id": "minecraft:budding_amethyst",
    "states": []
  },
  {
    "id": "minecraft:cactus",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "age"
      }
    ]
  },
  {
    "id": "minecraft:cake",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "name": "bite_counter"
      }
    ]
  },
  {
    "id": "minecraft:calcite",
    "states": []
  },
  {
    "id": "minecraft:campfire",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "extinguished"
      }
    ]
  },
  {
    "id": "minecraft:carpet",
    "states": [
      {
        "values": [
          "white",
          "orange",
          "magenta",
          "light_blue",
          "yellow",
          "lime",
          "pink",
          "gray",
          "silver",
          "cyan",
          "purple",
          "blue",
          "brown",
          "green",
          "red",
          "black"
        ],
        "name": "color"
      }
    ]
  },
  {
    "id": "minecraft:carrots",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "name": "growth"
      }
    ]
  },
  {
    "id": "minecraft:cartography_table",
    "states": []
  },
  {
    "id": "minecraft:carved_pumpkin",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      }
    ]
  },
  {
    "id": "minecraft:cauldron",
    "states": [
      {
        "values": [
          "water",
          "lava",
          "powder_snow"
        ],
        "name": "cauldron_liquid"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "name": "fill_level"
      }
    ]
  },
  {
    "id": "minecraft:cave_vines",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25"
        ],
        "name": "growing_plant_age"
      }
    ]
  },
  {
    "id": "minecraft:cave_vines_body_with_berries",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25"
        ],
        "name": "growing_plant_age"
      }
    ]
  },
  {
    "id": "minecraft:cave_vines_head_with_berries",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25"
        ],
        "name": "growing_plant_age"
      }
    ]
  },
  {
    "id": "minecraft:chain",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:chain_command_block",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "conditional_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:chest",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:chiseled_deepslate",
    "states": []
  },
  {
    "id": "minecraft:chiseled_nether_bricks",
    "states": []
  },
  {
    "id": "minecraft:chiseled_polished_blackstone",
    "states": []
  },
  {
    "id": "minecraft:chorus_flower",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "age"
      }
    ]
  },
  {
    "id": "minecraft:chorus_plant",
    "states": []
  },
  {
    "id": "minecraft:clay",
    "states": []
  },
  {
    "id": "minecraft:coal_block",
    "states": []
  },
  {
    "id": "minecraft:coal_ore",
    "states": []
  },
  {
    "id": "minecraft:cobbled_deepslate",
    "states": []
  },
  {
    "id": "minecraft:cobbled_deepslate_double_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:cobbled_deepslate_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:cobbled_deepslate_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:cobbled_deepslate_wall",
    "states": [
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_east"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_north"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_south"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_west"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "wall_post_bit"
      }
    ]
  },
  {
    "id": "minecraft:cobblestone",
    "states": []
  },
  {
    "id": "minecraft:cobblestone_wall",
    "states": [
      {
        "values": [
          "cobblestone",
          "mossy_cobblestone",
          "granite",
          "diorite",
          "andesite",
          "sandstone",
          "brick",
          "stone_brick",
          "mossy_stone_brick",
          "nether_brick",
          "end_brick",
          "prismarine",
          "red_sandstone",
          "red_nether_brick"
        ],
        "name": "wall_block_type"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_east"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_north"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_south"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_west"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "wall_post_bit"
      }
    ]
  },
  {
    "id": "minecraft:cocoa",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2"
        ],
        "name": "age"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      }
    ]
  },
  {
    "id": "minecraft:colored_torch_bp",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "color_bit"
      },
      {
        "values": [
          "unknown",
          "west",
          "east",
          "north",
          "south",
          "top"
        ],
        "name": "torch_facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:colored_torch_rg",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "color_bit"
      },
      {
        "values": [
          "unknown",
          "west",
          "east",
          "north",
          "south",
          "top"
        ],
        "name": "torch_facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:command_block",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "conditional_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:composter",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8"
        ],
        "name": "composter_fill_level"
      }
    ]
  },
  {
    "id": "minecraft:concrete",
    "states": [
      {
        "values": [
          "white",
          "orange",
          "magenta",
          "light_blue",
          "yellow",
          "lime",
          "pink",
          "gray",
          "silver",
          "cyan",
          "purple",
          "blue",
          "brown",
          "green",
          "red",
          "black"
        ],
        "name": "color"
      }
    ]
  },
  {
    "id": "minecraft:concretePowder",
    "states": [
      {
        "values": [
          "white",
          "orange",
          "magenta",
          "light_blue",
          "yellow",
          "lime",
          "pink",
          "gray",
          "silver",
          "cyan",
          "purple",
          "blue",
          "brown",
          "green",
          "red",
          "black"
        ],
        "name": "color"
      }
    ]
  },
  {
    "id": "minecraft:conduit",
    "states": []
  },
  {
    "id": "minecraft:copper_block",
    "states": []
  },
  {
    "id": "minecraft:copper_ore",
    "states": []
  },
  {
    "id": "minecraft:coral",
    "states": [
      {
        "values": [
          "blue",
          "pink",
          "purple",
          "red",
          "yellow"
        ],
        "name": "coral_color"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "dead_bit"
      }
    ]
  },
  {
    "id": "minecraft:coral_block",
    "states": [
      {
        "values": [
          "blue",
          "pink",
          "purple",
          "red",
          "yellow"
        ],
        "name": "coral_color"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "dead_bit"
      }
    ]
  },
  {
    "id": "minecraft:coral_fan",
    "states": [
      {
        "values": [
          "blue",
          "pink",
          "purple",
          "red",
          "yellow"
        ],
        "name": "coral_color"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "coral_fan_direction"
      }
    ]
  },
  {
    "id": "minecraft:coral_fan_dead",
    "states": [
      {
        "values": [
          "blue",
          "pink",
          "purple",
          "red",
          "yellow"
        ],
        "name": "coral_color"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "coral_fan_direction"
      }
    ]
  },
  {
    "id": "minecraft:coral_fan_hang",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "coral_direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "coral_hang_type_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "dead_bit"
      }
    ]
  },
  {
    "id": "minecraft:coral_fan_hang2",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "coral_direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "coral_hang_type_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "dead_bit"
      }
    ]
  },
  {
    "id": "minecraft:coral_fan_hang3",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "coral_direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "coral_hang_type_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "dead_bit"
      }
    ]
  },
  {
    "id": "minecraft:cracked_deepslate_bricks",
    "states": []
  },
  {
    "id": "minecraft:cracked_deepslate_tiles",
    "states": []
  },
  {
    "id": "minecraft:cracked_nether_bricks",
    "states": []
  },
  {
    "id": "minecraft:cracked_polished_blackstone_bricks",
    "states": []
  },
  {
    "id": "minecraft:crafting_table",
    "states": []
  },
  {
    "id": "minecraft:crimson_button",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "button_pressed_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:crimson_door",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "door_hinge_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upper_block_bit"
      }
    ]
  },
  {
    "id": "minecraft:crimson_double_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:crimson_fence",
    "states": []
  },
  {
    "id": "minecraft:crimson_fence_gate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "in_wall_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      }
    ]
  },
  {
    "id": "minecraft:crimson_fungus",
    "states": []
  },
  {
    "id": "minecraft:crimson_hyphae",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:crimson_nylium",
    "states": []
  },
  {
    "id": "minecraft:crimson_planks",
    "states": []
  },
  {
    "id": "minecraft:crimson_pressure_plate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:crimson_roots",
    "states": []
  },
  {
    "id": "minecraft:crimson_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:crimson_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:crimson_standing_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "ground_sign_direction"
      }
    ]
  },
  {
    "id": "minecraft:crimson_stem",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:crimson_trapdoor",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      }
    ]
  },
  {
    "id": "minecraft:crimson_wall_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:crying_obsidian",
    "states": []
  },
  {
    "id": "minecraft:cut_copper",
    "states": []
  },
  {
    "id": "minecraft:cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:cut_copper_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:cyan_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:dark_oak_button",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "button_pressed_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:dark_oak_door",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "door_hinge_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upper_block_bit"
      }
    ]
  },
  {
    "id": "minecraft:dark_oak_fence_gate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "in_wall_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      }
    ]
  },
  {
    "id": "minecraft:dark_oak_pressure_plate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:dark_oak_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:dark_oak_trapdoor",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      }
    ]
  },
  {
    "id": "minecraft:dark_prismarine_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:darkoak_standing_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "ground_sign_direction"
      }
    ]
  },
  {
    "id": "minecraft:darkoak_wall_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:daylight_detector",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:daylight_detector_inverted",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:deadbush",
    "states": []
  },
  {
    "id": "minecraft:deepslate",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:deepslate_brick_double_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:deepslate_brick_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:deepslate_brick_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:deepslate_brick_wall",
    "states": [
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_east"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_north"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_south"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_west"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "wall_post_bit"
      }
    ]
  },
  {
    "id": "minecraft:deepslate_bricks",
    "states": []
  },
  {
    "id": "minecraft:deepslate_coal_ore",
    "states": []
  },
  {
    "id": "minecraft:deepslate_copper_ore",
    "states": []
  },
  {
    "id": "minecraft:deepslate_diamond_ore",
    "states": []
  },
  {
    "id": "minecraft:deepslate_emerald_ore",
    "states": []
  },
  {
    "id": "minecraft:deepslate_gold_ore",
    "states": []
  },
  {
    "id": "minecraft:deepslate_iron_ore",
    "states": []
  },
  {
    "id": "minecraft:deepslate_lapis_ore",
    "states": []
  },
  {
    "id": "minecraft:deepslate_redstone_ore",
    "states": []
  },
  {
    "id": "minecraft:deepslate_tile_double_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:deepslate_tile_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:deepslate_tile_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:deepslate_tile_wall",
    "states": [
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_east"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_north"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_south"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_west"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "wall_post_bit"
      }
    ]
  },
  {
    "id": "minecraft:deepslate_tiles",
    "states": []
  },
  {
    "id": "minecraft:deny",
    "states": []
  },
  {
    "id": "minecraft:detector_rail",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "rail_data_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "rail_direction"
      }
    ]
  },
  {
    "id": "minecraft:diamond_block",
    "states": []
  },
  {
    "id": "minecraft:diamond_ore",
    "states": []
  },
  {
    "id": "minecraft:diorite_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:dirt",
    "states": [
      {
        "values": [
          "normal",
          "coarse"
        ],
        "name": "dirt_type"
      }
    ]
  },
  {
    "id": "minecraft:dirt_with_roots",
    "states": []
  },
  {
    "id": "minecraft:dispenser",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "triggered_bit"
      }
    ]
  },
  {
    "id": "minecraft:double_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:double_plant",
    "states": [
      {
        "values": [
          "sunflower",
          "syringa",
          "grass",
          "fern",
          "rose",
          "paeonia"
        ],
        "name": "double_plant_type"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upper_block_bit"
      }
    ]
  },
  {
    "id": "minecraft:double_stone_slab",
    "states": [
      {
        "values": [
          "smooth_stone",
          "sandstone",
          "wood",
          "cobblestone",
          "brick",
          "stone_brick",
          "quartz",
          "nether_brick"
        ],
        "name": "stone_slab_type"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:double_stone_slab2",
    "states": [
      {
        "values": [
          "red_sandstone",
          "purpur",
          "prismarine_rough",
          "prismarine_dark",
          "prismarine_brick",
          "mossy_cobblestone",
          "smooth_sandstone",
          "red_nether_brick"
        ],
        "name": "stone_slab_type_2"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:double_stone_slab3",
    "states": [
      {
        "values": [
          "end_stone_brick",
          "smooth_red_sandstone",
          "polished_andesite",
          "andesite",
          "diorite",
          "polished_diorite",
          "granite",
          "polished_granite"
        ],
        "name": "stone_slab_type_3"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:double_stone_slab4",
    "states": [
      {
        "values": [
          "mossy_stone_brick",
          "smooth_quartz",
          "stone",
          "cut_sandstone",
          "cut_red_sandstone"
        ],
        "name": "stone_slab_type_4"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:double_wooden_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      },
      {
        "values": [
          "oak",
          "spruce",
          "birch",
          "jungle",
          "acacia",
          "dark_oak"
        ],
        "name": "wood_type"
      }
    ]
  },
  {
    "id": "minecraft:dragon_egg",
    "states": []
  },
  {
    "id": "minecraft:dried_kelp_block",
    "states": []
  },
  {
    "id": "minecraft:dripstone_block",
    "states": []
  },
  {
    "id": "minecraft:dropper",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "triggered_bit"
      }
    ]
  },
  {
    "id": "minecraft:emerald_block",
    "states": []
  },
  {
    "id": "minecraft:emerald_ore",
    "states": []
  },
  {
    "id": "minecraft:enchanting_table",
    "states": []
  },
  {
    "id": "minecraft:end_brick_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:end_bricks",
    "states": []
  },
  {
    "id": "minecraft:end_gateway",
    "states": []
  },
  {
    "id": "minecraft:end_portal",
    "states": []
  },
  {
    "id": "minecraft:end_portal_frame",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "end_portal_eye_bit"
      }
    ]
  },
  {
    "id": "minecraft:end_rod",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:end_stone",
    "states": []
  },
  {
    "id": "minecraft:ender_chest",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:exposed_copper",
    "states": []
  },
  {
    "id": "minecraft:exposed_cut_copper",
    "states": []
  },
  {
    "id": "minecraft:exposed_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:exposed_cut_copper_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:exposed_double_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:farmland",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "name": "moisturized_amount"
      }
    ]
  },
  {
    "id": "minecraft:fence",
    "states": [
      {
        "values": [
          "oak",
          "spruce",
          "birch",
          "jungle",
          "acacia",
          "dark_oak"
        ],
        "name": "wood_type"
      }
    ]
  },
  {
    "id": "minecraft:fence_gate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "in_wall_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      }
    ]
  },
  {
    "id": "minecraft:fire",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "age"
      }
    ]
  },
  {
    "id": "minecraft:fletching_table",
    "states": []
  },
  {
    "id": "minecraft:flower_pot",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "update_bit"
      }
    ]
  },
  {
    "id": "minecraft:flowering_azalea",
    "states": []
  },
  {
    "id": "minecraft:flowing_lava",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "liquid_depth"
      }
    ]
  },
  {
    "id": "minecraft:flowing_water",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "liquid_depth"
      }
    ]
  },
  {
    "id": "minecraft:frame",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "item_frame_map_bit"
      }
    ]
  },
  {
    "id": "minecraft:frosted_ice",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "age"
      }
    ]
  },
  {
    "id": "minecraft:furnace",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:gilded_blackstone",
    "states": []
  },
  {
    "id": "minecraft:glass",
    "states": []
  },
  {
    "id": "minecraft:glass_pane",
    "states": []
  },
  {
    "id": "minecraft:glow_frame",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "item_frame_map_bit"
      }
    ]
  },
  {
    "id": "minecraft:glow_lichen",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63"
        ],
        "name": "multi_face_direction_bits"
      }
    ]
  },
  {
    "id": "minecraft:glowingobsidian",
    "states": []
  },
  {
    "id": "minecraft:glowstone",
    "states": []
  },
  {
    "id": "minecraft:gold_block",
    "states": []
  },
  {
    "id": "minecraft:gold_ore",
    "states": []
  },
  {
    "id": "minecraft:golden_rail",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "rail_data_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "rail_direction"
      }
    ]
  },
  {
    "id": "minecraft:granite_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:grass",
    "states": []
  },
  {
    "id": "minecraft:grass_path",
    "states": []
  },
  {
    "id": "minecraft:gravel",
    "states": []
  },
  {
    "id": "minecraft:gray_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:green_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:grindstone",
    "states": [
      {
        "values": [
          "standing",
          "hanging",
          "side",
          "multiple"
        ],
        "name": "attachment"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      }
    ]
  },
  {
    "id": "minecraft:hanging_roots",
    "states": []
  },
  {
    "id": "minecraft:hard_glass",
    "states": []
  },
  {
    "id": "minecraft:hard_glass_pane",
    "states": []
  },
  {
    "id": "minecraft:hard_stained_glass",
    "states": [
      {
        "values": [
          "white",
          "orange",
          "magenta",
          "light_blue",
          "yellow",
          "lime",
          "pink",
          "gray",
          "silver",
          "cyan",
          "purple",
          "blue",
          "brown",
          "green",
          "red",
          "black"
        ],
        "name": "color"
      }
    ]
  },
  {
    "id": "minecraft:hard_stained_glass_pane",
    "states": [
      {
        "values": [
          "white",
          "orange",
          "magenta",
          "light_blue",
          "yellow",
          "lime",
          "pink",
          "gray",
          "silver",
          "cyan",
          "purple",
          "blue",
          "brown",
          "green",
          "red",
          "black"
        ],
        "name": "color"
      }
    ]
  },
  {
    "id": "minecraft:hardened_clay",
    "states": []
  },
  {
    "id": "minecraft:hay_block",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "deprecated"
      },
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:heavy_weighted_pressure_plate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:honey_block",
    "states": []
  },
  {
    "id": "minecraft:honeycomb_block",
    "states": []
  },
  {
    "id": "minecraft:hopper",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "toggle_bit"
      }
    ]
  },
  {
    "id": "minecraft:ice",
    "states": []
  },
  {
    "id": "minecraft:infested_deepslate",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:info_update",
    "states": []
  },
  {
    "id": "minecraft:info_update2",
    "states": []
  },
  {
    "id": "minecraft:invisibleBedrock",
    "states": []
  },
  {
    "id": "minecraft:iron_bars",
    "states": []
  },
  {
    "id": "minecraft:iron_block",
    "states": []
  },
  {
    "id": "minecraft:iron_door",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "door_hinge_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upper_block_bit"
      }
    ]
  },
  {
    "id": "minecraft:iron_ore",
    "states": []
  },
  {
    "id": "minecraft:iron_trapdoor",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      }
    ]
  },
  {
    "id": "minecraft:jigsaw",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "rotation"
      }
    ]
  },
  {
    "id": "minecraft:jukebox",
    "states": []
  },
  {
    "id": "minecraft:jungle_button",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "button_pressed_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:jungle_door",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "door_hinge_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upper_block_bit"
      }
    ]
  },
  {
    "id": "minecraft:jungle_fence_gate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "in_wall_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      }
    ]
  },
  {
    "id": "minecraft:jungle_pressure_plate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:jungle_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:jungle_standing_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "ground_sign_direction"
      }
    ]
  },
  {
    "id": "minecraft:jungle_trapdoor",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      }
    ]
  },
  {
    "id": "minecraft:jungle_wall_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:kelp",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25"
        ],
        "name": "kelp_age"
      }
    ]
  },
  {
    "id": "minecraft:ladder",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:lantern",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "hanging"
      }
    ]
  },
  {
    "id": "minecraft:lapis_block",
    "states": []
  },
  {
    "id": "minecraft:lapis_ore",
    "states": []
  },
  {
    "id": "minecraft:large_amethyst_bud",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:lava",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "liquid_depth"
      }
    ]
  },
  {
    "id": "minecraft:lava_cauldron",
    "states": [
      {
        "values": [
          "water",
          "lava",
          "powder_snow"
        ],
        "name": "cauldron_liquid"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6"
        ],
        "name": "fill_level"
      }
    ]
  },
  {
    "id": "minecraft:leaves",
    "states": [
      {
        "values": [
          "oak",
          "spruce",
          "birch",
          "jungle"
        ],
        "name": "old_leaf_type"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "persistent_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "update_bit"
      }
    ]
  },
  {
    "id": "minecraft:leaves2",
    "states": [
      {
        "values": [
          "acacia",
          "dark_oak"
        ],
        "name": "new_leaf_type"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "persistent_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "update_bit"
      }
    ]
  },
  {
    "id": "minecraft:lectern",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "powered_bit"
      }
    ]
  },
  {
    "id": "minecraft:lever",
    "states": [
      {
        "values": [
          "down_east_west",
          "east",
          "west",
          "south",
          "north",
          "up_north_south",
          "up_east_west",
          "down_north_south"
        ],
        "name": "lever_direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      }
    ]
  },
  {
    "id": "minecraft:light_block",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "block_light_level"
      }
    ]
  },
  {
    "id": "minecraft:light_blue_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:light_weighted_pressure_plate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:lightning_rod",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:lime_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:lit_blast_furnace",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:lit_deepslate_redstone_ore",
    "states": []
  },
  {
    "id": "minecraft:lit_furnace",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:lit_pumpkin",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      }
    ]
  },
  {
    "id": "minecraft:lit_redstone_lamp",
    "states": []
  },
  {
    "id": "minecraft:lit_redstone_ore",
    "states": []
  },
  {
    "id": "minecraft:lit_smoker",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:lodestone",
    "states": []
  },
  {
    "id": "minecraft:log",
    "states": [
      {
        "values": [
          "oak",
          "spruce",
          "birch",
          "jungle"
        ],
        "name": "old_log_type"
      },
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:log2",
    "states": [
      {
        "values": [
          "acacia",
          "dark_oak"
        ],
        "name": "new_log_type"
      },
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:loom",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      }
    ]
  },
  {
    "id": "minecraft:magenta_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:magma",
    "states": []
  },
  {
    "id": "minecraft:medium_amethyst_bud",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:melon_block",
    "states": []
  },
  {
    "id": "minecraft:melon_stem",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "name": "growth"
      }
    ]
  },
  {
    "id": "minecraft:mob_spawner",
    "states": []
  },
  {
    "id": "minecraft:monster_egg",
    "states": [
      {
        "values": [
          "stone",
          "cobblestone",
          "stone_brick",
          "mossy_stone_brick",
          "cracked_stone_brick",
          "chiseled_stone_brick"
        ],
        "name": "monster_egg_stone_type"
      }
    ]
  },
  {
    "id": "minecraft:moss_block",
    "states": []
  },
  {
    "id": "minecraft:moss_carpet",
    "states": []
  },
  {
    "id": "minecraft:mossy_cobblestone",
    "states": []
  },
  {
    "id": "minecraft:mossy_cobblestone_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:mossy_stone_brick_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:movingBlock",
    "states": []
  },
  {
    "id": "minecraft:mycelium",
    "states": []
  },
  {
    "id": "minecraft:nether_brick",
    "states": []
  },
  {
    "id": "minecraft:nether_brick_fence",
    "states": []
  },
  {
    "id": "minecraft:nether_brick_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:nether_gold_ore",
    "states": []
  },
  {
    "id": "minecraft:nether_sprouts",
    "states": []
  },
  {
    "id": "minecraft:nether_wart",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "age"
      }
    ]
  },
  {
    "id": "minecraft:nether_wart_block",
    "states": []
  },
  {
    "id": "minecraft:netherite_block",
    "states": []
  },
  {
    "id": "minecraft:netherrack",
    "states": []
  },
  {
    "id": "minecraft:netherreactor",
    "states": []
  },
  {
    "id": "minecraft:normal_stone_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:noteblock",
    "states": []
  },
  {
    "id": "minecraft:oak_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:observer",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "powered_bit"
      }
    ]
  },
  {
    "id": "minecraft:obsidian",
    "states": []
  },
  {
    "id": "minecraft:orange_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:oxidized_copper",
    "states": []
  },
  {
    "id": "minecraft:oxidized_cut_copper",
    "states": []
  },
  {
    "id": "minecraft:oxidized_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:oxidized_cut_copper_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:oxidized_double_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:packed_ice",
    "states": []
  },
  {
    "id": "minecraft:pink_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:piston",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:pistonArmCollision",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:planks",
    "states": [
      {
        "values": [
          "oak",
          "spruce",
          "birch",
          "jungle",
          "acacia",
          "dark_oak"
        ],
        "name": "wood_type"
      }
    ]
  },
  {
    "id": "minecraft:podzol",
    "states": []
  },
  {
    "id": "minecraft:pointed_dripstone",
    "states": [
      {
        "values": [
          "tip",
          "frustum",
          "middle",
          "base",
          "merge"
        ],
        "name": "dripstone_thickness"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "hanging"
      }
    ]
  },
  {
    "id": "minecraft:polished_andesite_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:polished_basalt",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:polished_blackstone",
    "states": []
  },
  {
    "id": "minecraft:polished_blackstone_brick_double_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:polished_blackstone_brick_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:polished_blackstone_brick_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:polished_blackstone_brick_wall",
    "states": [
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_east"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_north"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_south"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_west"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "wall_post_bit"
      }
    ]
  },
  {
    "id": "minecraft:polished_blackstone_bricks",
    "states": []
  },
  {
    "id": "minecraft:polished_blackstone_button",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "button_pressed_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:polished_blackstone_double_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:polished_blackstone_pressure_plate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:polished_blackstone_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:polished_blackstone_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:polished_blackstone_wall",
    "states": [
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_east"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_north"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_south"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_west"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "wall_post_bit"
      }
    ]
  },
  {
    "id": "minecraft:polished_deepslate",
    "states": []
  },
  {
    "id": "minecraft:polished_deepslate_double_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:polished_deepslate_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:polished_deepslate_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:polished_deepslate_wall",
    "states": [
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_east"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_north"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_south"
      },
      {
        "values": [
          "none",
          "short",
          "tall"
        ],
        "name": "wall_connection_type_west"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "wall_post_bit"
      }
    ]
  },
  {
    "id": "minecraft:polished_diorite_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:polished_granite_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:portal",
    "states": [
      {
        "values": [
          "unknown",
          "x",
          "z"
        ],
        "name": "portal_axis"
      }
    ]
  },
  {
    "id": "minecraft:potatoes",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "name": "growth"
      }
    ]
  },
  {
    "id": "minecraft:powder_snow",
    "states": []
  },
  {
    "id": "minecraft:powered_comparator",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "output_lit_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "output_subtract_bit"
      }
    ]
  },
  {
    "id": "minecraft:powered_repeater",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "repeater_delay"
      }
    ]
  },
  {
    "id": "minecraft:prismarine",
    "states": [
      {
        "values": [
          "default",
          "dark",
          "bricks"
        ],
        "name": "prismarine_block_type"
      }
    ]
  },
  {
    "id": "minecraft:prismarine_bricks_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:prismarine_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:pumpkin",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      }
    ]
  },
  {
    "id": "minecraft:pumpkin_stem",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "name": "growth"
      }
    ]
  },
  {
    "id": "minecraft:purple_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:purpur_block",
    "states": [
      {
        "values": [
          "default",
          "chiseled",
          "lines",
          "smooth"
        ],
        "name": "chisel_type"
      },
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:purpur_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:quartz_block",
    "states": [
      {
        "values": [
          "default",
          "chiseled",
          "lines",
          "smooth"
        ],
        "name": "chisel_type"
      },
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:quartz_bricks",
    "states": []
  },
  {
    "id": "minecraft:quartz_ore",
    "states": []
  },
  {
    "id": "minecraft:quartz_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:rail",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9"
        ],
        "name": "rail_direction"
      }
    ]
  },
  {
    "id": "minecraft:raw_copper_block",
    "states": []
  },
  {
    "id": "minecraft:raw_gold_block",
    "states": []
  },
  {
    "id": "minecraft:raw_iron_block",
    "states": []
  },
  {
    "id": "minecraft:red_flower",
    "states": [
      {
        "values": [
          "poppy",
          "orchid",
          "allium",
          "houstonia",
          "tulip_red",
          "tulip_orange",
          "tulip_white",
          "tulip_pink",
          "oxeye",
          "cornflower",
          "lily_of_the_valley"
        ],
        "name": "flower_type"
      }
    ]
  },
  {
    "id": "minecraft:red_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:red_mushroom",
    "states": []
  },
  {
    "id": "minecraft:red_mushroom_block",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "huge_mushroom_bits"
      }
    ]
  },
  {
    "id": "minecraft:red_nether_brick",
    "states": []
  },
  {
    "id": "minecraft:red_nether_brick_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:red_sandstone",
    "states": [
      {
        "values": [
          "default",
          "heiroglyphs",
          "cut",
          "smooth"
        ],
        "name": "sand_stone_type"
      }
    ]
  },
  {
    "id": "minecraft:red_sandstone_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:redstone_block",
    "states": []
  },
  {
    "id": "minecraft:redstone_lamp",
    "states": []
  },
  {
    "id": "minecraft:redstone_ore",
    "states": []
  },
  {
    "id": "minecraft:redstone_torch",
    "states": [
      {
        "values": [
          "unknown",
          "west",
          "east",
          "north",
          "south",
          "top"
        ],
        "name": "torch_facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:redstone_wire",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:reeds",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "age"
      }
    ]
  },
  {
    "id": "minecraft:repeating_command_block",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "conditional_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:reserved6",
    "states": []
  },
  {
    "id": "minecraft:respawn_anchor",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4"
        ],
        "name": "respawn_anchor_charge"
      }
    ]
  },
  {
    "id": "minecraft:sand",
    "states": [
      {
        "values": [
          "normal",
          "red"
        ],
        "name": "sand_type"
      }
    ]
  },
  {
    "id": "minecraft:sandstone",
    "states": [
      {
        "values": [
          "default",
          "heiroglyphs",
          "cut",
          "smooth"
        ],
        "name": "sand_stone_type"
      }
    ]
  },
  {
    "id": "minecraft:sandstone_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:sapling",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "age_bit"
      },
      {
        "values": [
          "oak",
          "spruce",
          "birch",
          "jungle",
          "acacia",
          "dark_oak"
        ],
        "name": "sapling_type"
      }
    ]
  },
  {
    "id": "minecraft:scaffolding",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "name": "stability"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "stability_check"
      }
    ]
  },
  {
    "id": "minecraft:sculk_sensor",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "powered_bit"
      }
    ]
  },
  {
    "id": "minecraft:sea_pickle",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "cluster_count"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "dead_bit"
      }
    ]
  },
  {
    "id": "minecraft:seagrass",
    "states": [
      {
        "values": [
          "default",
          "double_top",
          "double_bot"
        ],
        "name": "sea_grass_type"
      }
    ]
  },
  {
    "id": "minecraft:seaLantern",
    "states": []
  },
  {
    "id": "minecraft:shroomlight",
    "states": []
  },
  {
    "id": "minecraft:shulker_box",
    "states": [
      {
        "values": [
          "white",
          "orange",
          "magenta",
          "light_blue",
          "yellow",
          "lime",
          "pink",
          "gray",
          "silver",
          "cyan",
          "purple",
          "blue",
          "brown",
          "green",
          "red",
          "black"
        ],
        "name": "color"
      }
    ]
  },
  {
    "id": "minecraft:silver_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:skull",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "no_drop_bit"
      }
    ]
  },
  {
    "id": "minecraft:slime",
    "states": []
  },
  {
    "id": "minecraft:small_amethyst_bud",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:small_dripleaf_block",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upper_block_bit"
      }
    ]
  },
  {
    "id": "minecraft:smithing_table",
    "states": []
  },
  {
    "id": "minecraft:smoker",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:smooth_basalt",
    "states": []
  },
  {
    "id": "minecraft:smooth_quartz_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:smooth_red_sandstone_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:smooth_sandstone_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:smooth_stone",
    "states": []
  },
  {
    "id": "minecraft:snow",
    "states": []
  },
  {
    "id": "minecraft:snow_layer",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "covered_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "name": "height"
      }
    ]
  },
  {
    "id": "minecraft:soul_campfire",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "extinguished"
      }
    ]
  },
  {
    "id": "minecraft:soul_fire",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "age"
      }
    ]
  },
  {
    "id": "minecraft:soul_lantern",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "hanging"
      }
    ]
  },
  {
    "id": "minecraft:soul_sand",
    "states": []
  },
  {
    "id": "minecraft:soul_soil",
    "states": []
  },
  {
    "id": "minecraft:soul_torch",
    "states": [
      {
        "values": [
          "unknown",
          "west",
          "east",
          "north",
          "south",
          "top"
        ],
        "name": "torch_facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:sponge",
    "states": [
      {
        "values": [
          "dry",
          "wet"
        ],
        "name": "sponge_type"
      }
    ]
  },
  {
    "id": "minecraft:spore_blossom",
    "states": []
  },
  {
    "id": "minecraft:spruce_button",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "button_pressed_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:spruce_door",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "door_hinge_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upper_block_bit"
      }
    ]
  },
  {
    "id": "minecraft:spruce_fence_gate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "in_wall_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      }
    ]
  },
  {
    "id": "minecraft:spruce_pressure_plate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:spruce_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:spruce_standing_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "ground_sign_direction"
      }
    ]
  },
  {
    "id": "minecraft:spruce_trapdoor",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      }
    ]
  },
  {
    "id": "minecraft:spruce_wall_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:stained_glass",
    "states": [
      {
        "values": [
          "white",
          "orange",
          "magenta",
          "light_blue",
          "yellow",
          "lime",
          "pink",
          "gray",
          "silver",
          "cyan",
          "purple",
          "blue",
          "brown",
          "green",
          "red",
          "black"
        ],
        "name": "color"
      }
    ]
  },
  {
    "id": "minecraft:stained_glass_pane",
    "states": [
      {
        "values": [
          "white",
          "orange",
          "magenta",
          "light_blue",
          "yellow",
          "lime",
          "pink",
          "gray",
          "silver",
          "cyan",
          "purple",
          "blue",
          "brown",
          "green",
          "red",
          "black"
        ],
        "name": "color"
      }
    ]
  },
  {
    "id": "minecraft:stained_hardened_clay",
    "states": [
      {
        "values": [
          "white",
          "orange",
          "magenta",
          "light_blue",
          "yellow",
          "lime",
          "pink",
          "gray",
          "silver",
          "cyan",
          "purple",
          "blue",
          "brown",
          "green",
          "red",
          "black"
        ],
        "name": "color"
      }
    ]
  },
  {
    "id": "minecraft:standing_banner",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "ground_sign_direction"
      }
    ]
  },
  {
    "id": "minecraft:standing_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "ground_sign_direction"
      }
    ]
  },
  {
    "id": "minecraft:sticky_piston",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:stickyPistonArmCollision",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:stone",
    "states": [
      {
        "values": [
          "stone",
          "granite",
          "granite_smooth",
          "diorite",
          "diorite_smooth",
          "andesite",
          "andesite_smooth"
        ],
        "name": "stone_type"
      }
    ]
  },
  {
    "id": "minecraft:stone_brick_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:stone_button",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "button_pressed_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:stone_pressure_plate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:stone_slab",
    "states": [
      {
        "values": [
          "smooth_stone",
          "sandstone",
          "wood",
          "cobblestone",
          "brick",
          "stone_brick",
          "quartz",
          "nether_brick"
        ],
        "name": "stone_slab_type"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:stone_slab2",
    "states": [
      {
        "values": [
          "red_sandstone",
          "purpur",
          "prismarine_rough",
          "prismarine_dark",
          "prismarine_brick",
          "mossy_cobblestone",
          "smooth_sandstone",
          "red_nether_brick"
        ],
        "name": "stone_slab_type_2"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:stone_slab3",
    "states": [
      {
        "values": [
          "end_stone_brick",
          "smooth_red_sandstone",
          "polished_andesite",
          "andesite",
          "diorite",
          "polished_diorite",
          "granite",
          "polished_granite"
        ],
        "name": "stone_slab_type_3"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:stone_slab4",
    "states": [
      {
        "values": [
          "mossy_stone_brick",
          "smooth_quartz",
          "stone",
          "cut_sandstone",
          "cut_red_sandstone"
        ],
        "name": "stone_slab_type_4"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:stone_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:stonebrick",
    "states": [
      {
        "values": [
          "default",
          "mossy",
          "cracked",
          "chiseled",
          "smooth"
        ],
        "name": "stone_brick_type"
      }
    ]
  },
  {
    "id": "minecraft:stonecutter",
    "states": []
  },
  {
    "id": "minecraft:stonecutter_block",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:stripped_acacia_log",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:stripped_birch_log",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:stripped_crimson_hyphae",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:stripped_crimson_stem",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:stripped_dark_oak_log",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:stripped_jungle_log",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:stripped_oak_log",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:stripped_spruce_log",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:stripped_warped_hyphae",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:stripped_warped_stem",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:structure_block",
    "states": [
      {
        "values": [
          "data",
          "save",
          "load",
          "corner",
          "invalid",
          "export"
        ],
        "name": "structure_block_type"
      }
    ]
  },
  {
    "id": "minecraft:structure_void",
    "states": [
      {
        "values": [
          "void",
          "air"
        ],
        "name": "structure_void_type"
      }
    ]
  },
  {
    "id": "minecraft:sweet_berry_bush",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "name": "growth"
      }
    ]
  },
  {
    "id": "minecraft:tallgrass",
    "states": [
      {
        "values": [
          "default",
          "tall",
          "fern",
          "snow"
        ],
        "name": "tall_grass_type"
      }
    ]
  },
  {
    "id": "minecraft:target",
    "states": []
  },
  {
    "id": "minecraft:tinted_glass",
    "states": []
  },
  {
    "id": "minecraft:tnt",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "allow_underwater_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "explode_bit"
      }
    ]
  },
  {
    "id": "minecraft:torch",
    "states": [
      {
        "values": [
          "unknown",
          "west",
          "east",
          "north",
          "south",
          "top"
        ],
        "name": "torch_facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:trapdoor",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      }
    ]
  },
  {
    "id": "minecraft:trapped_chest",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:tripWire",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "attached_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "disarmed_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "powered_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "suspended_bit"
      }
    ]
  },
  {
    "id": "minecraft:tripwire_hook",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "attached_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "powered_bit"
      }
    ]
  },
  {
    "id": "minecraft:tuff",
    "states": []
  },
  {
    "id": "minecraft:turtle_egg",
    "states": [
      {
        "values": [
          "no_cracks",
          "cracked",
          "max_cracked"
        ],
        "name": "cracked_state"
      },
      {
        "values": [
          "one_egg",
          "two_egg",
          "three_egg",
          "four_egg"
        ],
        "name": "turtle_egg_count"
      }
    ]
  },
  {
    "id": "minecraft:twisting_vines",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25"
        ],
        "name": "twisting_vines_age"
      }
    ]
  },
  {
    "id": "minecraft:undyed_shulker_box",
    "states": []
  },
  {
    "id": "minecraft:unknown",
    "states": []
  },
  {
    "id": "minecraft:unlit_redstone_torch",
    "states": [
      {
        "values": [
          "unknown",
          "west",
          "east",
          "north",
          "south",
          "top"
        ],
        "name": "torch_facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:unpowered_comparator",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "output_lit_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "output_subtract_bit"
      }
    ]
  },
  {
    "id": "minecraft:unpowered_repeater",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "repeater_delay"
      }
    ]
  },
  {
    "id": "minecraft:vine",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "vine_direction_bits"
      }
    ]
  },
  {
    "id": "minecraft:wall_banner",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:wall_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:warped_button",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "button_pressed_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:warped_door",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "door_hinge_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upper_block_bit"
      }
    ]
  },
  {
    "id": "minecraft:warped_double_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:warped_fence",
    "states": []
  },
  {
    "id": "minecraft:warped_fence_gate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "in_wall_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      }
    ]
  },
  {
    "id": "minecraft:warped_fungus",
    "states": []
  },
  {
    "id": "minecraft:warped_hyphae",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:warped_nylium",
    "states": []
  },
  {
    "id": "minecraft:warped_planks",
    "states": []
  },
  {
    "id": "minecraft:warped_pressure_plate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:warped_roots",
    "states": []
  },
  {
    "id": "minecraft:warped_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:warped_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:warped_standing_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "ground_sign_direction"
      }
    ]
  },
  {
    "id": "minecraft:warped_stem",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      }
    ]
  },
  {
    "id": "minecraft:warped_trapdoor",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      }
    ]
  },
  {
    "id": "minecraft:warped_wall_sign",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:warped_wart_block",
    "states": []
  },
  {
    "id": "minecraft:water",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "liquid_depth"
      }
    ]
  },
  {
    "id": "minecraft:waterlily",
    "states": []
  },
  {
    "id": "minecraft:waxed_copper",
    "states": []
  },
  {
    "id": "minecraft:waxed_cut_copper",
    "states": []
  },
  {
    "id": "minecraft:waxed_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:waxed_cut_copper_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:waxed_double_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:waxed_exposed_copper",
    "states": []
  },
  {
    "id": "minecraft:waxed_exposed_cut_copper",
    "states": []
  },
  {
    "id": "minecraft:waxed_exposed_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:waxed_exposed_cut_copper_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:waxed_exposed_double_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:waxed_oxidized_copper",
    "states": []
  },
  {
    "id": "minecraft:waxed_oxidized_cut_copper",
    "states": []
  },
  {
    "id": "minecraft:waxed_oxidized_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:waxed_oxidized_cut_copper_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:waxed_oxidized_double_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:waxed_weathered_copper",
    "states": []
  },
  {
    "id": "minecraft:waxed_weathered_cut_copper",
    "states": []
  },
  {
    "id": "minecraft:waxed_weathered_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:waxed_weathered_cut_copper_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:waxed_weathered_double_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:weathered_copper",
    "states": []
  },
  {
    "id": "minecraft:weathered_cut_copper",
    "states": []
  },
  {
    "id": "minecraft:weathered_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:weathered_cut_copper_stairs",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upside_down_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "weirdo_direction"
      }
    ]
  },
  {
    "id": "minecraft:weathered_double_cut_copper_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      }
    ]
  },
  {
    "id": "minecraft:web",
    "states": []
  },
  {
    "id": "minecraft:weeping_vines",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25"
        ],
        "name": "weeping_vines_age"
      }
    ]
  },
  {
    "id": "minecraft:wheat",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "name": "growth"
      }
    ]
  },
  {
    "id": "minecraft:white_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:wither_rose",
    "states": []
  },
  {
    "id": "minecraft:wood",
    "states": [
      {
        "values": [
          "y",
          "x",
          "z"
        ],
        "name": "pillar_axis"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "stripped_bit"
      },
      {
        "values": [
          "oak",
          "spruce",
          "birch",
          "jungle",
          "acacia",
          "dark_oak"
        ],
        "name": "wood_type"
      }
    ]
  },
  {
    "id": "minecraft:wooden_button",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "button_pressed_bit"
      },
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  },
  {
    "id": "minecraft:wooden_door",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3"
        ],
        "name": "direction"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "door_hinge_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "open_bit"
      },
      {
        "values": [
          "0",
          "1"
        ],
        "name": "upper_block_bit"
      }
    ]
  },
  {
    "id": "minecraft:wooden_pressure_plate",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        "name": "redstone_signal"
      }
    ]
  },
  {
    "id": "minecraft:wooden_slab",
    "states": [
      {
        "values": [
          "0",
          "1"
        ],
        "name": "top_slot_bit"
      },
      {
        "values": [
          "oak",
          "spruce",
          "birch",
          "jungle",
          "acacia",
          "dark_oak"
        ],
        "name": "wood_type"
      }
    ]
  },
  {
    "id": "minecraft:wool",
    "states": [
      {
        "values": [
          "white",
          "orange",
          "magenta",
          "light_blue",
          "yellow",
          "lime",
          "pink",
          "gray",
          "silver",
          "cyan",
          "purple",
          "blue",
          "brown",
          "green",
          "red",
          "black"
        ],
        "name": "color"
      }
    ]
  },
  {
    "id": "minecraft:yellow_flower",
    "states": []
  },
  {
    "id": "minecraft:yellow_glazed_terracotta",
    "states": [
      {
        "values": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "name": "facing_direction"
      }
    ]
  }
]
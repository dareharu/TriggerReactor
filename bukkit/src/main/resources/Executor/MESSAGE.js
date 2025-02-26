/*******************************************************************************
 *     Copyright (C) 2017 wysohn
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *******************************************************************************/
var ChatColor = Java.type('org.bukkit.ChatColor')
var Bukkit = Java.type('org.bukkit.Bukkit')
var Objects = Java.type('java.util.Objects');

function MESSAGE(args){
    for(var i = 0; i < args.length ; i++){
        var text = Objects.toString(args[i])
        if(Bukkit.getPluginManager().isPluginEnabled("PlaceholderAPI")){
            var PlaceholderAPI = Java.type('me.clip.placeholderapi.PlaceholderAPI');
            args[i] = PlaceholderAPI.setPlaceholders(player, text);
        } else {
            args[i] = ChatColor.translateAlternateColorCodes(Char('&'), text);
        }
    	
        player.sendMessage(args[i]);
    }
    return null;
}
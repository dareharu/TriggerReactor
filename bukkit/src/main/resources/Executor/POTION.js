/*******************************************************************************
 *     Copyright (C) 2018 wysohn
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
var PotionEffect = Java.type('org.bukkit.potion.PotionEffect');
var PotionEffectType = Java.type('org.bukkit.potion.PotionEffectType');

function POTION(args){
	if(player === null)
		return null;
		
	if(args.length < 2)
		throw new Error("Invalid parameters. Need [String, Depends on type]");
		
	if(typeof args[0] !== "string")
		throw new Error("Invalid parameters. First parameter wasn't a String");
		
	var typeName = args[0].toUpperCase();
	var type = PotionEffectType.getByName(typeName);
	
	if(type == null)
		throw new Error("Invalid PotionEffectType named "+typeName);
	
	if(typeof args[1] !== "number")
		throw new Error("Second parameter should be a number.");
	
	var level = 1;
	if(args.length > 2){
		if(typeof args[2] != "number")
			throw new Error("Third parameter should be a number");
		else
			level = args[2];
	}

	var effect = new PotionEffect(type, args[1], level - 1);

	player.addPotionEffect(effect);

	return null;
}
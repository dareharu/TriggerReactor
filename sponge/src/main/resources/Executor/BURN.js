/*******************************************************************************
 *     Copyright (C) 2017 soliddanii
 *     Copyright (C) 2022 Sayakie
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
var Keys = Java.type('org.spongepowered.api.data.key.Keys')
var Entity = Java.type('org.spongepowered.api.entity.Entity')
var Sponge = Java.type('org.spongepowered.api.Sponge')
var Integer = Java.type('java.lang.Integer')

var DAY_OF_SECONDS = 5184000

validation = {
  overloads: [
    [{ name: 'seconds', type: 'int', minimum: 0, maximum: DAY_OF_SECONDS }],
    [
      { name: 'target', type: 'string' },
      { name: 'seconds', type: 'int', minimum: 0, maximum: DAY_OF_SECONDS }
    ],
    [
      { name: 'target', type: Entity.Class },
      { name: 'seconds', type: 'int', minimum: 0, maximum: DAY_OF_SECONDS }
    ]
  ]
}

function BURN(args) {
  var target = player,
    seconds

  if (overload === 0) {
    seconds = args[0] * 20
  } else if (overload === 1 || overload === 2) {
    target = Sponge.getServer().getPlayer(target).orElse(null)
    seconds = args[1] * 20
  } else if (overload === 2) {
    target = args[0]
    seconds = args[1] * 20
  }

  if (!target) {
    throw new Error('Player to burn does not exist.')
  }

  target.offer(Keys.FIRE_TICKS, Math.round(seconds))
  return null
}

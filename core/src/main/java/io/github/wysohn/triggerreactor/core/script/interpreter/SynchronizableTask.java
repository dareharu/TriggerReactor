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
package io.github.wysohn.triggerreactor.core.script.interpreter;

import io.github.wysohn.triggerreactor.core.main.TriggerReactorCore;

import java.util.concurrent.Callable;
import java.util.concurrent.Future;

public interface SynchronizableTask {

    /**
     * This will run in separate thread.
     *
     * @param task
     * @param mills
     */
    public static void runTaskLater(Runnable task, long mills) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                if (mills > 0) {
                    try {
                        Thread.sleep(mills);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }

                task.run();
            }
        }).start();
    }

    /**
     * This will run in separate thread.
     *
     * @param task
     * @param mills
     */
    public static void runTaskLater(Runnable task) {
        runTaskLater(task, 0L);
    }

    public static <T> Future<T> runSyncTaskForFuture(Callable<T> call) {
        return TriggerReactorCore.getInstance().callSyncMethod(call);
    }
}

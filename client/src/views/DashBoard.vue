<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useSession, useUser} from '@/model/session';
    import type { Workout } from "@/model/workouts";
    import { countWorkout } from "@/model/workouts";


    const session = useSession();
    const newWorkout = ref({ date: '', duration: 0, name: '' });
    const workouts = ref<Workout[]>([]);

    const user = session.user;

    const userId = useUser()
    console.log(user?.email)

    async function countAllWorkout() {
        if(user?.email != null)
        {
            await countWorkout(user?.email);
        }
    
  }


</script>


<template>
    <div class="d">
    <main class="column">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <div class="title">Dashboard</div>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <button type="button" class="button is-small">
                                January 23, 2023 - May 4, 2023
                            </button>
                        </div>
                    </div>
                </div>

                <div class="columns is-multiline">
                    <div class="column">
                        <div class="box">
                            <div class="heading">All Workouts</div>
                            <div class="title">
                                25
                                <!-- {{countAllWorkout()}} -->



                            </div>
                            <div class="level">
                                <div class="level-item">
                                    <div class="">
                                        <div class="heading">Thats</div>
                                        <div class="title is-5"><br></div>
                                    </div>
                                </div>
                                <div class="level-item">
                                    <div class="">
                                        <div class="heading"> </div>
                                        <div class="title is-5"><br></div>
                                    </div>
                                </div>
                                <div class="level-item">
                                    <div class="">
                                        <div class="heading">Crazy</div>
                                        <div class="title is-5"><br></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="box">
                            <div class="heading">All Time Calories Burned</div>
                            <div class="title">55% / 45%</div>
                            <div class="level">
                                <div class="level-item">
                                    <div class="">
                                        <div class="heading">Great</div>
                                        <div class="title is-5"> <br></div>
                                    </div>
                                </div>
                                <div class="level-item">
                                    <div class="">
                                        <div class="heading"> </div>
                                        <div class="title is-5"> <br></div>
                                    </div>
                                </div>
                                <div class="level-item">
                                    <div class="">
                                        <div class="heading">Job</div>
                                        <div class="title is-5"><br> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="box">
                            <div class="heading">All Time Weight Lost</div>
                            <div class="title">78% &uarr;</div>
                            <div class="level">
                                <div class="level-item">
                                    <div class="">
                                        <div class="heading">Your</div>
                                        <div class="title is-5"><br></div>
                                    </div>
                                </div>
                                <div class="level-item">
                                    <div class="">
                                        <div class="heading">a</div>
                                        <div class="title is-5"><br></div>
                                    </div>
                                </div>
                                <div class="level-item">
                                    <div class="">
                                        <div class="heading">Beast</div>
                                        <div class="title is-5"><br></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Removed a Box of information -->
                    <!-- <div class="column">
                        <div class="box">
                            <div class="heading">Orders / Returns</div>
                            <div class="title">75% / 25%</div>
                            <div class="level">
                                <div class="level-item">
                                    <div class="">
                                        <div class="heading">Orders $</div>
                                        <div class="title is-5">425,000</div>
                                    </div>
                                </div>
                                <div class="level-item">
                                    <div class="">
                                        <div class="heading">Returns $</div>
                                        <div class="title is-5">106,250</div>
                                    </div>
                                </div>
                                <div class="level-item">
                                    <div class="">
                                        <div class="heading">Success %</div>
                                        <div class="title is-5">+ 28,5%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>

                <div class="columns is-multiline">
                    <div class="column is-6">
                        <div class="panel">
                            <p class="panel-heading">
                                Expenses: Daily - $700
                            </p>
                            <div class="panel-block">
                                <figure class="image is-16x9">
                                    <img src="../assets/ProfilePictures/Patrick-PNG-File.png">
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="panel">
                            <p class="panel-heading">
                                Refunds: Daily - $200
                            </p>
                            <div class="panel-block">
                                <figure class="image is-16x9">
                                    <img src="../assets/ProfilePictures/Patrick-PNG-File.png">
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="panel">
                            <p class="panel-heading">
                                Something
                            </p>
                            <div class="panel-block">
                                <figure class="image is-16x9">
                                    <img src="../assets/ProfilePictures/Patrick-PNG-File.png">
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6">
                        <div class="panel">
                            <p class="panel-heading">
                                Something Else
                            </p>
                            <div class="panel-block">
                                <figure class="image is-16x9">
                                    <img src="../assets/ProfilePictures/Patrick-PNG-File.png">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
</template>



<style scoped>

</style>
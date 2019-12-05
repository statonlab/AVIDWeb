<template>
    <form action="#">
        <div class="card-body">
            <div class="form-group">
                <label for="plant">Plant Type</label>
                <select id="plant" class="form-control" v-model="form.plant">
                    <option v-for="plant in plants" :value="plant">{{ plant }}</option>
                </select>
            </div>

            <div v-if="form.plant === 'Canada Mayflower'" class="row">
                <div class="form-group col-6">
                    <label for="date">Date<required/></label>
                    <select name="date" id="date" v-model="form.date" class="form-control">
                        <option value="Date">Date</option>
                    </select>
                </div>
                <div class="form-group col-6">
                    <label for="stems">Number of Stems<required/></label>
                    <input id="stems" type="text" class="form-control" placeholder="Number of Stems">
                </div>
                <div class="form-group col-6">
                    <label for="flowers">Number of Flowers<required/></label>
                    <input id="flowers" type="text" class="form-control" placeholder="Number of Flowers">
                </div>
            </div>
            <div v-else class="row">
                <div class="form-group col-6">
                    <label for="tag-num">Tag Number<required/></label>
                    <input type="text" id="tag-num" class="form-control" v-model="form.tag" placeholder="Tag #">
                </div>
                <div class="form-group col-6">
                    <label for="species">Species<required/></label>
                    <select name="species" id="species" v-model="form.species" class="form-control">
                        <option value="">Select a Species</option>
                        <option>Option 1</option>
                    </select>
                </div>
                <div class="form-group col-6">
                    <label for="quadrant">Quadrant<required/></label>
                    <select name="quadrant" id="quadrant" v-model="form.quadrant" class="form-control">
                        <option value="">Select a Quadrant</option>
                        <option value="Northeast">Northeast</option>
                        <option value="Northwest">Northwest</option>
                        <option value="Southeast">Southeast</option>
                        <option value="Southwest">Southwest</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="card-footer bg-light">
            <button type="submit" class="btn btn-primary">
                Save
            </button>
        </div>
    </form>
</template>

<script>
    import Form from './Form'
    import Required from '../components/Required'

    export default {
        name: 'PlantForm',
        components: {Required},
        props: {
            plot: {required: true, type: Object},
        },

        data() {
            return {
                plants: [
                    'Spring Wildflower',
                    'Woody Seedlings',
                    'Canada Mayflower',
                ],

                form: new Form({
                    plant          : 'Spring Wildflower',
                    // Seedlings and Wildflowers
                    tag            : '',
                    species        : '',
                    quadrant       : '',
                    // Canada Mayflower
                    numberOfStems  : '',
                    numberOfFlowers: '',
                    date           : null,
                }),
            }
        },
    }
</script>

<style scoped>

</style>

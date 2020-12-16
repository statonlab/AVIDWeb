<template>
    <modal @close="$emit('close')">
        <form action="#" @submit.prevent="save">
            <modal-card>
                <modal-header>
                    <modal-title>Move Plant #{{ plant.tag }}</modal-title>
                    <close @click.prevent="$emit('close')"/>
                </modal-header>
                <modal-body class="position-static">
                    <div class="form-group">
                        <label for="plot">
                            Plot to move Plant #{{ plant.tag }} to
                            <required/>
                        </label>
                        <select id="plot"
                                name="plot_id"
                                class="form-control"
                                :class="{'is-invalid': form.errors.has('plot_id')}"
                                v-model="form.plot_id">
                            <option v-for="plot in plots" :value="plot.id">Plot #{{ plot.number }}</option>
                        </select>
                        <small class="form-text text-danger" v-if="form.errors.has('plot_id')">
                            {{ form.errors.first('plot_id') }}
                        </small>
                    </div>
                </modal-body>
                <modal-footer class="d-flex justify-content-between">
                    <button type="submit" class="btn btn-primary" :disabled="saving">
                        <inline-spinner v-if="saving"/>
                        Save
                    </button>

                    <button type="button" class="btn btn-light" @click.prevent="$emit('close')">
                        Cancel
                    </button>
                </modal-footer>
            </modal-card>
        </form>
    </modal>
</template>

<script>
import Form from './Form'
import Required from '../components/Required'
import Modal from '../components/Modal/Modal'
import ModalCard from '../components/Modal/ModalCard'
import ModalHeader from '../components/Modal/ModalHeader'
import ModalBody from '../components/Modal/ModalBody'
import ModalFooter from '../components/Modal/ModalFooter'
import ModalTitle from '../components/Modal/ModalTitle'
import Close from '../components/Modal/Close'
import Dropdown from '../components/Dropdown'
import InlineSpinner from '../components/InlineSpinner'
import Icon from '../components/Icon'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import moment from 'moment'

export default {
    name: "MovePlantForm",
    components: {
        DatePicker,
        InlineSpinner,
        Dropdown,
        Close,
        ModalTitle,
        ModalFooter,
        ModalBody,
        ModalHeader,
        ModalCard,
        Modal,
        Required,
        Icon,
    },
    props: {
        plot: {required: true, type: Object},
        plots: {required: true, type: Array},
        plant: {required: true, type: Object},
    },

    data() {
        const date = window.avid.last_entry
        return {
            saving: false,
            date: date ? moment(date).toDate() : null,
            form: new Form({
                new_measurement: false,
                date: window.avid.last_entry,
                height: '',
                new_species: false,
                new_species_name: '',
                plant_type_id: '',
                tag: '',
                species_id: '',
                quadrant: '',
                total: '',
            }),
        }
    },

    async mounted() {
        this.form.setDefault(this.plant)
    },

    methods: {
        save() {
            this.create()
            this.deletePlant()
            this.$emit('update')
        },

        async create() {
            this.saving = true
            try {
                const {data} = await this.form.post(`/web/plots/${this.form.plot_id}/plants`)
            } catch (e) {
                if (!e.response || e.response.status !== 422) {
                    this.$notify({
                        text: 'Unable to create plant. Please try refreshing the page.',
                        type: 'error',
                    })
                }
                console.error(e)
            }
            this.saving = false
        },

        async deletePlant() {
            try {
                await axios.delete(`/web/plants/${this.plant.id}`)
            } catch (e) {
                this.$notify({
                    text: 'Unable to delete plant. Please try refreshing the page.',
                    type: 'error',
                })
                console.error(e)
            }
        },
    },
}
</script>

<style scoped>

</style>

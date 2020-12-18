<template>
    <modal @close="$emit('close')">
        <form action="#" @submit.prevent="transfer">
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

export default {
    name: "MovePlantForm",
    components: {
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
        return {
            saving: false,
            form: new Form({
                plot_id: '',
                site_id: '',
            }),
        }
    },

    async mounted() {
        this.form.setDefault(this.plant)
    },

    methods: {
        async transfer() {
            this.saving = true
            try {
                this.form.site_id = this.plot.site_id
                await this.form.put(`/web/plants/${this.plant.id}/transfer`)
                this.$emit('update')
            } catch (e) {
                if (!e.response || e.response.status !== 422) {
                    this.$notify({
                        text: 'Unable to transfer plant. Please try refreshing the page.',
                        type: 'error',
                    })
                }
                console.error(e)
            }
            this.saving = false
        },
    },
}
</script>
<style scoped>
</style>

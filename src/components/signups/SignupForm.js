import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const SignupForm = ({signup, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Signup</h1>
      <TextInput
        name="title"
        label="Title"
        value={signup.title}
        onChange={onChange}
        error={errors.title}/>
      <SelectInput
        name="authorId"
        label="Author"
        value={signup.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange}
        error={errors.authorId}/>
      <TextInput
        name="category"
        label="Category"
        value={signup.category}
        onChange={onChange}
        error={errors.category}/>
      <TextInput
          name="length"
          label="Length"
          value={signup.length}
          onChange={onChange}
          error={errors.length}/>
        <input
          type="submit"
          className="btn btn-primary"
          disabled={loading}
          value={loading ? 'Saving...': 'Save'}
          onClick={onSave}/>
    </form>
  );
};

SignupForm.propTypes = {
  signup: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default SignupForm;

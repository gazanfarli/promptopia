import dynamic from "next/dynamic";
import PromptLoading from "./loading-skeleton/prompt/PromptLoading";

const DynamicPromptCard = dynamic(() => import('./PromptCard'), {
  loading: () => <PromptLoading />
})

const PromptCardList = ({ data, handleEdit, handleTagClick }) => {
  return (
    <div className='mt-16 mb-16 prompt_layout'>
      {data.map((post) => (
        <DynamicPromptCard
          key={post._id}
          post={post}
          handleEdit={handleEdit}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
};

const Profile = ({
  name,
  desc,
  data,
  loading,
  handleEdit,
  handleDelete
}) => {

  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>
      {loading ? (
        <div className='prompt_layout mt-16'>
          {Array(6).fill(<PromptLoading />)}
        </div>
      ) : (
        <PromptCardList
          data={data}
          handleTagClick={() => { }}
          handleEdit={handleEdit}
          loading={loading}
        />
      )}
    </section>
  )
}

export default Profile
import supabase from "../supabase.js";
const getWashingMachines = async () => {
  const { data, error } = await supabase.from("washing_machine").select("*");

  if (error) {
    console.error("Error fetching washing machines:", error);
  }
  return data;
};
const getWashingMachine = async (id) => {
  const { data, error } = await supabase
    .from("washing_machine")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error("Error fetching washing machine:", error);
  }
  return data;
};

const updateWashingMachine = async (id, status, time) => {
  const currentTime = new Date();
  const formattedTime =
    String(currentTime.getHours()).padStart(2, "0") +
    ":" +
    String(currentTime.getMinutes()).padStart(2, "0");

  const { data, error } = await supabase
    .from("washing_machine")
    .update({ status: status, time_remaining: time, updated_at: formattedTime })
    .eq("id", id)
    .select("*");

  if (error) {
    console.error("Error updating washing machine:", error);
  } else {
    console.log("Updated washing machine data:", data);
  }

  return data; // đảm bảo trả về data, dù là null nếu không có bản ghi nào được cập nhật
};

export { getWashingMachines, updateWashingMachine, getWashingMachine };
